"use strict";
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3360],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1321],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js

/***/ 2498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.14.2_react@18.0.0-alpha-aecb3b6d1/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(28623);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.0_react-hook-form@7.14.2/node_modules/@hookform/resolvers/dist/resolvers.module.js
var resolvers_module_i=function(e,i){for(var a in i.fields){var f=i.fields[a];if(f&&f.ref&&"reportValidity"in f.ref){var t=(0,index_esm/* get */.U2)(e,a);f.ref.setCustomValidity(t&&t.message||""),f.ref.reportValidity()}}},resolvers_module_a=function(a,f){f.shouldUseNativeValidation&&resolvers_module_i(a,f);var t={};for(var o in a){var s=(0,index_esm/* get */.U2)(f.fields,o);(0,index_esm/* set */.t8)(t,o,Object.assign(a[o],{ref:s&&s.ref}))}return t};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.0_react-hook-form@7.14.2/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_i({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:resolvers_module_a(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
/***/ 57012:
=======
/***/ 57711:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ActionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36487);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88808);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8236);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76814);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27768);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88448);
=======
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25933);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65111);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76900);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91377);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46754);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js



const ActionCardIcon = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP)('div')(({ theme  })=>`
    width: 36px;
    height: 36px;

    & > svg {
        width: 100%;
        height: 100%;
    }
`
);
const ActionCardButton = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP)('div')(({ theme  })=>`
    font-size: 14px;

    & > button {
        width: 140px;
        border-radius: ${theme.spacing(2)};
    }
`
);
const ActionCard = ({ icon , title , subtitle , action  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        variant: "outlined",
        sx: {
            padding: (theme)=>theme.spacing(2.5)
            ,
            marginBottom: (theme)=>theme.spacing(2.5)
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
            spacing: 2,
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionCardIcon, {
                    children: icon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    flex: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            variant: "body1",
                            paragraph: true,
                            sx: {
                                marginBottom: 0
                            },
                            children: title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
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
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                        size: "small",
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

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
/***/ 83360:
=======
/***/ 1321:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Wallets)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
=======
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/index.tsx + 11 modules
var DashboardFrame = __webpack_require__(47574);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
var src = __webpack_require__(22209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(88448);
=======
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(24846);
// EXTERNAL MODULE: ../icons/general/ImportWallet.tsx
var ImportWallet = __webpack_require__(2919);
// EXTERNAL MODULE: ../icons/general/CloudLink.tsx
var CloudLink = __webpack_require__(23662);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
var locales = __webpack_require__(28951);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(40623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Stack/Stack.js
var Stack = __webpack_require__(88808);
// EXTERNAL MODULE: ../dashboard/src/components/ActionCard/index.tsx
var ActionCard = __webpack_require__(57012);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(29886);
=======
var locales = __webpack_require__(76591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Stack/Stack.js
var Stack = __webpack_require__(65111);
// EXTERNAL MODULE: ../dashboard/src/components/ActionCard/index.tsx
var ActionCard = __webpack_require__(57711);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(11922);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/StartUp.tsx





<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js



const Container = (0,styled/* default */.ZP)('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
function StartUp() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { openDialog: openConnectWalletDialog  } = (0,shared_src.useRemoteControlledDialog)(API/* PluginMessages.Wallet.events.selectProviderDialogUpdated */.yC.Wallet.events.selectProviderDialogUpdated);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
            variant: "background",
            sx: {
                width: '100%',
                height: '100%'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                justifyContent: "center",
                height: "100%",
                alignItems: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                            title: t.wallets_startup_create(),
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {
                                fontSize: "inherit"
                            }),
                            subtitle: t.wallets_startup_create_desc(),
                            action: {
                                type: 'primary',
                                text: t.wallets_startup_create_action(),
                                handler: ()=>API/* Services.Helper.openInternalPage */.K9.Helper.openInternalPage('next.html#/create-mask-wallet')
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                            title: t.wallets_startup_import(),
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImportWallet/* ImportWalletIcon */.B, {
                                fontSize: "inherit"
                            }),
                            subtitle: t.wallets_startup_import_desc(),
                            action: {
                                type: 'primary',
                                text: t.wallets_startup_import_action(),
                                handler: ()=>API/* Services.Helper.openPopupsWindow */.K9.Helper.openPopupsWindow('/wallet/import')
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                            title: t.wallets_startup_connect(),
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudLink/* CloudLinkIcon */._, {
                                fontSize: "inherit"
                            }),
                            subtitle: t.wallets_startup_connect_desc(),
                            action: {
                                type: 'primary',
                                text: t.wallets_startup_connect_action(),
                                handler: openConnectWalletDialog
                            }
                        })
                    ]
                })
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../dashboard/src/components/ContentContainer/index.tsx
var ContentContainer = __webpack_require__(7230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(72717);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(62758);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(72052);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(41362);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(27768);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(5726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(92197);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Table/Table.js + 1 modules
var Table = __webpack_require__(63706);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(82497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(38749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(82870);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(58314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Pagination/Pagination.js + 2 modules
var Pagination = __webpack_require__(4814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/PaginationItem/PaginationItem.js + 3 modules
var PaginationItem = __webpack_require__(1132);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../icons/general/Empty.tsx
var Empty = __webpack_require__(99726);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/EmptyPlaceholder/index.tsx






const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        prompt: {
            color: theme_src/* MaskColorVar.textLight */.ZN.textLight,
            fontSize: theme.typography.pxToRem(12),
            lineHeight: theme.typography.pxToRem(16),
            marginTop: theme.spacing(2.5)
        },
        icon: {
            width: 96,
            height: 96,
            fill: 'none'
        }
    })
);
const EmptyPlaceholder = /*#__PURE__*/ (0,react.memo)(({ children  })=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Empty/* EmptyIcon */.t, {
                className: classes.icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.prompt,
                children: children
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/components/LoadingPlacholder/index.tsx + 1 modules
var LoadingPlacholder = __webpack_require__(23007);
=======



const Container = (0,styled/* default */.ZP)('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
function StartUp() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { openDialog: openConnectWalletDialog  } = (0,shared_src.useRemoteControlledDialog)(API/* PluginMessages.Wallet.events.selectProviderDialogUpdated */.yC.Wallet.events.selectProviderDialogUpdated);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
            variant: "background",
            sx: {
                width: '100%',
                height: '100%'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                justifyContent: "center",
                height: "100%",
                alignItems: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                            title: t.wallets_startup_create(),
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {
                                fontSize: "inherit"
                            }),
                            subtitle: t.wallets_startup_create_desc(),
                            action: {
                                type: 'primary',
                                text: t.wallets_startup_create_action(),
                                handler: ()=>API/* Services.Helper.openInternalPage */.K9.Helper.openInternalPage('next.html#/create-mask-wallet')
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                            title: t.wallets_startup_import(),
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImportWallet/* ImportWalletIcon */.B, {
                                fontSize: "inherit"
                            }),
                            subtitle: t.wallets_startup_import_desc(),
                            action: {
                                type: 'primary',
                                text: t.wallets_startup_import_action(),
                                handler: ()=>API/* Services.Helper.openPopupsWindow */.K9.Helper.openPopupsWindow('/wallet/import')
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                            title: t.wallets_startup_connect(),
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudLink/* CloudLinkIcon */._, {
                                fontSize: "inherit"
                            }),
                            subtitle: t.wallets_startup_connect_desc(),
                            action: {
                                type: 'primary',
                                text: t.wallets_startup_connect_action(),
                                handler: openConnectWalletDialog
                            }
                        })
                    ]
                })
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../dashboard/src/components/ContentContainer/index.tsx
var ContentContainer = __webpack_require__(8245);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(34054);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(1173);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(20261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(57652);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(48237);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Table/Table.js + 1 modules
var Table = __webpack_require__(44695);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(8919);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(32789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(18292);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(85473);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Pagination/Pagination.js + 2 modules
var Pagination = __webpack_require__(77450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/PaginationItem/PaginationItem.js + 3 modules
var PaginationItem = __webpack_require__(44581);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../icons/general/Empty.tsx
var Empty = __webpack_require__(45965);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/EmptyPlaceholder/index.tsx






const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        prompt: {
            color: theme_src/* MaskColorVar.textLight */.ZN.textLight,
            fontSize: theme.typography.pxToRem(12),
            lineHeight: theme.typography.pxToRem(16),
            marginTop: theme.spacing(2.5)
        },
        icon: {
            width: 96,
            height: 96,
            fill: 'none'
        }
    })
);
const EmptyPlaceholder = /*#__PURE__*/ (0,react.memo)(({ children  })=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Empty/* EmptyIcon */.t, {
                className: classes.icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.prompt,
                children: children
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/components/LoadingPlacholder/index.tsx + 1 modules
var LoadingPlacholder = __webpack_require__(45163);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.2_2dbba68b7ac16965ba4a12f4e1c41a15/node_modules/react-router/index.js
var react_router = __webpack_require__(18875);
// EXTERNAL MODULE: ../dashboard/src/type.ts
var type = __webpack_require__(51987);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/TokenTableRow/index.tsx











const TokenTableRow_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 36,
            height: 36
        },
        symbol: {
            marginLeft: 14,
            fontSize: theme.typography.pxToRem(14)
        },
        cell: {
            padding: '16px 28px',
            border: 'none'
        }
    })
);
const TokenTableRow = /*#__PURE__*/ (0,react.memo)(({ asset  })=>{
    var ref;
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = TokenTableRow_useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                variant: "body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                            classes: {
                                icon: classes.icon
                            },
                            address: asset.token.address,
                            name: asset.token.name,
                            chainId: asset.token.chainId,
                            logoURI: asset.token.logoURI,
                            AvatarProps: {
                                sx: {
                                    width: 36,
                                    height: 36
                                }
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.symbol,
                            children: asset.token.symbol
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                variant: "body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: new (bignumber_default())((0,src/* formatBalance */.azF)(asset.balance, asset.token.decimals)).toFixed(6)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                variant: "body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: ((ref = asset.price) === null || ref === void 0 ? void 0 : ref[src/* CurrencyType.USD */.V2A.USD]) ? new (bignumber_default())(asset.price[src/* CurrencyType.USD */.V2A.USD]).gt((0,src/* pow10 */.wAG)(-6)) ? (0,src/* formatCurrency */.xGv)(Number.parseFloat(asset.price[src/* CurrencyType.USD */.V2A.USD]), '$') : '<0.000001' : '-'
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: (0,src/* getTokenUSDValue */.pLw)(asset) < 0.01 ? '<0.01' : /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedCurrency, {
                        value: (0,src/* getTokenUSDValue */.pLw)(asset).toFixed(2),
                        sign: "$"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                variant: "body",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "secondary",
                        sx: {
                            marginRight: 1
                        },
                        onClick: ()=>navigate(type/* RoutePaths.WalletsTransfer */.s2.WalletsTransfer)
                        ,
                        children: t.wallets_balance_Send()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "secondary",
                        children: t.wallets_balance_Swap()
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/ceil.js + 1 modules
var ceil = __webpack_require__(38073);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/TokenTable/index.tsx












const TokenTable_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        container: {
            height: 'calc(100% - 58px)',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 'calc(100% - 58px)'
        },
        header: {
            color: theme_src/* MaskColorVar.normalText */.ZN.normalText,
            fontWeight: theme.typography.fontWeightRegular,
            padding: '36px 0 12px',
            backgroundColor: theme_src/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            border: 'none'
        },
        footer: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paginationItem: {
            borderRadius: 4,
            border: `1px solid ${theme_src/* MaskColorVar.lineLight */.ZN.lineLight}`,
            color: theme_src/* MaskColorVar.textPrimary */.ZN.textPrimary,
            '&.Mui-selected': {
                backgroundColor: theme_src/* MaskColorVar.blue */.ZN.blue,
                color: '#ffffff',
                border: 'none',
                '&:hover': {
                    backgroundColor: theme_src/* MaskColorVar.blue */.ZN.blue
                }
            }
        }
    })
);
const TokenTable = /*#__PURE__*/ (0,react.memo)(()=>{
    const [page, setPage] = (0,react.useState)(1);
    const { value  } = (0,src/* useERC20TokensPaged */.GTU)(page - 1, 50);
    const { error: detailedTokensError , loading: detailedTokensLoading , value: detailedTokens ,  } = (0,src/* useAssets */.LiV)((value === null || value === void 0 ? void 0 : value.tokens) || []);
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TokenTableUI, {
        page: page,
        onPageChange: setPage,
        isLoading: detailedTokensLoading,
        isEmpty: !!detailedTokensError || !detailedTokens.length,
        showPagination: !detailedTokensLoading && !detailedTokensError && !!detailedTokens.length,
        dataSource: detailedTokens,
        count: (ref = (0,ceil/* default */.Z)((!!(value === null || value === void 0 ? void 0 : value.count) ? value.count : 1) / 50)) !== null && ref !== void 0 ? ref : 1
    }));
});
const TokenTableUI = /*#__PURE__*/ (0,react.memo)(({ page , onPageChange , isLoading , isEmpty , showPagination , dataSource , count  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = TokenTable_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                className: classes.container,
                children: isLoading || isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    flex: 1,
                    children: [
                        isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlacholder/* LoadingPlaceholder */.u, {
                        }) : null,
                        isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyPlaceholder, {
                            children: t.wallets_empty_tokens_tip()
                        }) : null
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
                    stickyHeader: true,
                    sx: {
                        padding: '0 44px'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_assets_asset()
                                    }, "Asset"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_assets_balance()
                                    }, "Balance"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_assets_price()
                                    }, "Price"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_assets_value()
                                    }, "Value"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_assets_operation()
                                    }, "Operation")
                                ]
                            })
                        }),
                        dataSource.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                            children: dataSource.sort((first, second)=>{
                                const firstValue = new (bignumber_default())((0,src/* formatBalance */.azF)(first.balance, first.token.decimals));
                                const secondValue = new (bignumber_default())((0,src/* formatBalance */.azF)(second.balance, second.token.decimals));
                                if (firstValue.eq(secondValue)) return 0;
                                return Number(firstValue.lt(secondValue));
                            }).map((asset, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TokenTableRow, {
                                    asset: asset
                                }, index)
                            )
                        }) : null
                    ]
                })
            }),
            showPagination && !isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Pagination/* default */.Z, {
                    variant: "outlined",
                    shape: "rounded",
                    count: count,
                    page: page,
                    onChange: (event, page1)=>onPageChange(page1)
                    ,
                    renderItem: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PaginationItem/* default */.Z, {
                            ...item,
                            classes: {
                                root: classes.paginationItem
                            }
                        })
                })
            }) : null
        ]
    }));
});

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69739);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(30255);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(62623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.12.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(53898);
=======
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(76015);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.14.2_react@18.0.0-alpha-aecb3b6d1/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(28623);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/AddTokenFormUI/index.tsx






const AddTokenFormUI_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(3.5, 5, 5),
            minWidth: 600
        },
        actions: {
            padding: theme.spacing(1, 5, 6.75, 5),
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(3.5)
        },
        button: {
            borderRadius: Number(theme.shape.borderRadius) * 5
        },
        item: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: theme.spacing(3.75),
            '&:last-child': {
                marginBottom: 0
            }
        }
    })
);
const AddTokenFormUI = /*#__PURE__*/ (0,react.memo)(({ token , onClose , onNext  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = AddTokenFormUI_useStyles();
    const { formState: { errors , isValid  } ,  } = (0,index_esm/* useFormContext */.Gc)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.item,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                            render: ({ field  })=>{
                                var ref, ref1;
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    ...field,
                                    variant: "filled",
                                    label: t.wallets_add_token_contract_address(),
                                    InputProps: {
                                        disableUnderline: true
                                    },
                                    error: !!((ref = errors.address) === null || ref === void 0 ? void 0 : ref.message),
                                    helperText: (ref1 = errors.address) === null || ref1 === void 0 ? void 0 : ref1.message
                                }));
                            },
                            name: "address"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.item,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                            render: ({ field  })=>{
                                var ref5, ref6;
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    ...field,
                                    variant: "filled",
                                    label: t.wallets_add_token_symbol(),
                                    InputProps: {
                                        disableUnderline: true
                                    },
                                    error: !!((ref5 = errors.symbol) === null || ref5 === void 0 ? void 0 : ref5.message),
                                    helperText: (ref6 = errors.symbol) === null || ref6 === void 0 ? void 0 : ref6.message
                                }));
                            },
                            name: "symbol"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.item,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                            render: ({ field  })=>{
                                var ref7, ref8;
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    ...field,
                                    onChange: (e)=>field.onChange(Number(e.target.value))
                                    ,
                                    variant: "filled",
                                    label: t.wallets_add_token_decimals(),
                                    disabled: !!(token === null || token === void 0 ? void 0 : token.decimals),
                                    inputProps: {
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*'
                                    },
                                    InputProps: {
                                        disableUnderline: true
                                    },
                                    error: !!((ref7 = errors.decimals) === null || ref7 === void 0 ? void 0 : ref7.message),
                                    helperText: (ref8 = errors.decimals) === null || ref8 === void 0 ? void 0 : ref8.message
                                }));
                            },
                            name: "decimals"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        className: classes.button,
                        onClick: onClose,
                        children: t.wallets_add_token_cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "primary",
                        className: classes.button,
                        onClick: onNext,
                        disabled: !isValid,
                        children: t.wallets_add_token_next()
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/AddTokenConfirmUI/index.tsx







const AddTokenConfirmUI_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        actions: {
            padding: theme.spacing(1, 5, 6.75, 5),
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(3.5)
        },
        button: {
            borderRadius: Number(theme.shape.borderRadius) * 5
        },
        content: {
            padding: theme.spacing(3.5, 5, 5),
            minWidth: 600
        },
        container: {
            '& > *': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }
        },
        confirmTitle: {
            fontWeight: 500
        }
    })
);
const AddTokenConfirmUI = /*#__PURE__*/ (0,react.memo)(({ token , balance , onBack , onConfirm  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = AddTokenConfirmUI_useStyles();
    const { getValues  } = (0,index_esm/* useFormContext */.Gc)();
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    spacing: 4.5,
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.confirmTitle,
                                    children: t.wallets_assets_token()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.confirmTitle,
                                    children: t.wallets_assets_balance()
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                                            address: (ref = token === null || token === void 0 ? void 0 : token.address) !== null && ref !== void 0 ? ref : '',
                                            name: token === null || token === void 0 ? void 0 : token.name,
                                            chainId: token === null || token === void 0 ? void 0 : token.chainId,
                                            logoURI: token === null || token === void 0 ? void 0 : token.logoURI,
                                            AvatarProps: {
                                                sx: {
                                                    width: 48,
                                                    height: 48
                                                }
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.confirmTitle,
                                            sx: {
                                                marginLeft: 1.2
                                            },
                                            children: getValues('symbol')
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.confirmTitle,
                                    children: [
                                        balance,
                                        " ",
                                        token === null || token === void 0 ? void 0 : token.symbol
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        className: classes.button,
                        onClick: onBack,
                        children: t.wallets_add_token_cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "primary",
                        className: classes.button,
                        onClick: onConfirm,
                        children: t.wallets_add_token()
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.8.1/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(89939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.0_react-hook-form@7.14.2/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(2498);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/AddTokenDialog/index.tsx














var AddTokenStep;
(function(AddTokenStep1) {
    AddTokenStep1[AddTokenStep1["INFORMATION"] = 0] = "INFORMATION";
    AddTokenStep1[AddTokenStep1["CONFIRM"] = 1] = "CONFIRM";
})(AddTokenStep || (AddTokenStep = {
}));
const AddTokenDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const wallet = (0,src/* useWallet */.Osb)();
    const schema = (0,react.useMemo)(()=>{
        var ref;
        return lib.z.object({
            address: lib.z.string().refine((address)=>dist.EthereumAddress.isValid(address)
            , t.wallets_incorrect_address()).refine((address)=>{
                return !Array.from((ref = wallet === null || wallet === void 0 ? void 0 : wallet.erc20_token_whitelist) !== null && ref !== void 0 ? ref : []).find((item)=>(0,src/* isSameAddress */.Wr$)(item, address)
                );
            }, t.wallets_token_been_added()),
            symbol: lib.z.string().min(1).max(11, t.wallets_token_symbol_tips()),
            decimals: lib.z.number().int().positive(t.wallets_token_decimals_tips()).max(18, t.wallets_token_decimals_tips())
        });
    }, [
        t,
        wallet
    ]);
    const methods = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            address: '',
            symbol: '',
            decimals: 8
        }
    });
    const { watch , formState: { errors , dirtyFields  } , setValue , handleSubmit ,  } = methods;
    const address = watch('address');
    const { value: token  } = (0,src/* useERC20TokenDetailed */.kIC)(!errors.address ? address : '');
    const { value: balance  } = (0,src/* useERC20TokenBalance */.yps)(!errors.address ? address : '');
    const onSubmit = (0,shared_src.useSnackbarCallback)({
        executor: handleSubmit(async (data)=>{
            if (!token || !wallet) return;
            await Promise.all([
                API/* PluginServices.Wallet.addERC20Token */.NG.Wallet.addERC20Token({
                    ...token,
                    ...data
                }),
                API/* PluginServices.Wallet.trustERC20Token */.NG.Wallet.trustERC20Token(wallet.address, {
                    ...token,
                    ...data
                }), 
            ]);
        }),
        deps: [
            token,
            wallet
        ],
        onSuccess: onClose
    });
    (0,react.useEffect)(()=>{
        if (token && token.symbol !== 'UNKNOWN' && dirtyFields.address) {
            var _symbol;
            setValue('symbol', (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : '', {
                shouldValidate: true
            });
            setValue('decimals', token.decimals, {
                shouldValidate: true
            });
        } else {
            setValue('symbol', '');
            setValue('decimals', 8);
        }
    }, [
        token,
        dirtyFields.address
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FormProvider */.RV, {
        ...methods,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddTokenDialogUI, {
            open: open,
            onClose: onClose,
            token: token,
            balance: balance,
            onSubmit: onSubmit
        })
    }));
});
const AddTokenDialogUI = /*#__PURE__*/ (0,react.memo)(({ open , onClose , token , balance , onSubmit  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { reset  } = (0,index_esm/* useFormContext */.Gc)();
    const [step, setStep] = (0,react.useState)(AddTokenStep.INFORMATION);
    //#region When dialog be closed, reset step and clear address input
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!open) {
            setStep(AddTokenStep.INFORMATION);
            reset();
        }
    }, [
        open
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(theme_src/* MaskDialog */.Df, {
        maxWidth: "md",
        open: open,
        title: t.wallets_add_token(),
        onClose: onClose,
        children: [
            step === AddTokenStep.INFORMATION ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AddTokenFormUI, {
                token: token,
                onClose: onClose,
                onNext: ()=>setStep(AddTokenStep.CONFIRM)
            }) : null,
            step === AddTokenStep.CONFIRM ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AddTokenConfirmUI, {
                        token: token,
                        balance: balance,
                        onBack: ()=>setStep(AddTokenStep.INFORMATION)
                        ,
                        onConfirm: onSubmit
                    })
                ]
            }) : null
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TablePagination/TablePagination.js + 2 modules
var TablePagination = __webpack_require__(76111);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/api.ts


const [useCurrentCollectibleDataProvider] = (0,shared_src.createGlobalState)(API/* Services.Settings.getCurrentCollectibleDataProvider */.K9.Settings.getCurrentCollectibleDataProvider, (x)=>API/* Messages.events.currentCollectibleDataProviderSettings.on */.Vm.events.currentCollectibleDataProviderSettings.on(x)
);
const [useCurrentSelectedWalletNetwork] = (0,shared_src.createGlobalState)(API/* Services.Settings.getCurrentSelectedWalletNetwork */.K9.Settings.getCurrentSelectedWalletNetwork, (x)=>API/* Messages.events.currentNetworkSettings.on */.Vm.events.currentNetworkSettings.on(x)
);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../icons/brands/MiniMask.tsx
var MiniMask = __webpack_require__(93714);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/CollectiblePlaceHolder/index.tsx





const CollectiblePlaceHolder_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    container: {
        borderRadius: 8,
        width: 140,
        height: 215,
        backgroundColor: theme_src/* MaskColorVar.lightBackground */.ZN.lightBackground,
        display: 'flex',
        flexDirection: 'column'
    },
    placeholder: {
        width: '100%',
        height: 186,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        flex: 1,
        backgroundColor: theme_src/* MaskColorVar.infoBackground */.ZN.infoBackground
    }
});
const CollectiblePlaceholder = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes  } = CollectiblePlaceHolder_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.placeholder,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MiniMask/* MiniMaskIcon */.q, {
                    viewBox: "0 0 48 48",
                    sx: {
                        fontSize: 48,
                        opacity: 0.5
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.description
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/CollectibleCard/index.tsx







const CollectibleCard_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    card: {
        borderRadius: 8,
        width: 140,
        height: 215,
        backgroundColor: theme_src/* MaskColorVar.lightestBackground */.ZN.lightestBackground,
        display: 'flex',
        flexDirection: 'column'
    },
    imgContainer: {
        width: '100%',
        height: 186
    },
    description: {
        flex: 1,
        padding: '6.5px 7.5px'
    },
    name: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontSize: 12
    }
});
const CollectibleCard = /*#__PURE__*/ (0,react.memo)(({ chainId , provider , token  })=>{
    const { classes  } = CollectibleCard_useStyles();
    return token.info.image ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                target: "_blank",
                rel: "noopener noreferrer",
                href: (0,src/* resolveCollectibleLink */.Q_Z)(chainId, provider, token),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.imgContainer,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: token.info.image,
                        style: {
                            objectFit: 'contain',
                            width: '100%',
                            height: '100%'
                        }
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.description,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    color: "textPrimary",
                    variant: "body2",
                    children: token.info.name
                })
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectiblePlaceholder, {
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/CollectibleList/index.tsx










const CollectibleList_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    container: {
        padding: '24px 26px 0px',
        height: 'calc(100% - 58px)',
        maxHeight: 'calc(100% - 58px)',
        overflow: 'auto'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    card: {
        padding: '10px 14px'
    },
    footer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
const CollectibleList = /*#__PURE__*/ (0,react.memo)(()=>{
    const [page, setPage] = (0,react.useState)(0);
    const chainId = (0,src/* useChainId */.xxU)();
    const wallet = (0,src/* useWallet */.Osb)();
    const account = (0,src/* useAccount */.mAM)();
    const provider = useCurrentCollectibleDataProvider();
    const { value ={
        collectibles: [],
        hasNextPage: false
    } , loading: collectiblesLoading , error: collectiblesError ,  } = (0,src/* useCollectibles */.dX_)(account, chainId, provider, page, 20);
    const { collectibles =[] , hasNextPage  } = value;
    const dataSource = collectibles.filter((x)=>{
        const key = `${(0,src/* formatEthereumAddress */.j8w)(x.contractDetailed.address)}_${x.tokenId}`;
        switch(x.contractDetailed.type){
            case src/* EthereumTokenType.ERC721 */.Drc.ERC721:
                return (wallet === null || wallet === void 0 ? void 0 : wallet.erc721_token_blacklist) ? !(wallet === null || wallet === void 0 ? void 0 : wallet.erc721_token_blacklist.has(key)) : true;
            default:
                return false;
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleListUI, {
        isLoading: collectiblesLoading,
        isEmpty: !!collectiblesError || collectibles.length === 0,
        page: page,
        onPageChange: setPage,
        hasNextPage: hasNextPage,
        showPagination: !collectiblesLoading && !(page === 0 && dataSource.length === 0),
        dataSource: dataSource,
        chainId: chainId,
        provider: provider
    }));
});
const CollectibleListUI = /*#__PURE__*/ (0,react.memo)(({ page , onPageChange , isLoading , isEmpty , hasNextPage , showPagination , chainId , provider , dataSource  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = CollectibleList_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.container,
                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlacholder/* LoadingPlaceholder */.u, {
                }) : isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyPlaceholder, {
                    children: t.wallets_empty_collectible_tip()
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.root,
                    children: dataSource.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.card,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
                                chainId: chainId,
                                provider: provider,
                                token: x
                            })
                        }, x.tokenId)
                    )
                })
            }),
            showPagination ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                    count: -1,
                    component: "div",
                    onPageChange: ()=>{
                    },
                    page: page,
                    rowsPerPage: 20,
                    rowsPerPageOptions: [
                        20
                    ],
                    labelDisplayedRows: ()=>null
                    ,
                    backIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev - 1
                            )
                        ,
                        size: 'small',
                        disabled: page === 0
                    },
                    nextIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev + 1
                            )
                        ,
                        disabled: !hasNextPage,
                        size: 'small'
                    }
                })
            }) : null
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/AddCollectibleDialog/index.tsx











var FormErrorType;
(function(FormErrorType1) {
    FormErrorType1["Added"] = 'ADDED';
    FormErrorType1["NotExist"] = 'NOT_EXIST';
})(FormErrorType || (FormErrorType = {
}));
const AddCollectibleDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose  })=>{
    const wallet = (0,src/* useWallet */.Osb)();
    const [address, setAddress] = (0,react.useState)('');
    const { value: contractDetailed , loading: contractDetailLoading  } = (0,src/* useERC721ContractDetailed */.P1e)(address);
    const [tokenId, setTokenId, erc721TokenDetailedCallback] = (0,src/* useERC721TokenDetailedCallback */._gN)(contractDetailed);
    const onSubmit = (0,react.useCallback)(async ()=>{
        if (contractDetailLoading || !wallet) return;
        const tokenInDB = await API/* PluginServices.Wallet.getERC721Token */.NG.Wallet.getERC721Token(address, tokenId);
        if (tokenInDB) throw new Error(FormErrorType.Added);
        const tokenDetailed = await erc721TokenDetailedCallback();
        if (tokenDetailed && !(0,src/* isSameAddress */.Wr$)(tokenDetailed.info.owner, wallet.address) || !tokenDetailed || !tokenDetailed.info.owner) {
            throw new Error(FormErrorType.NotExist);
        } else {
            await API/* PluginServices.Wallet.addERC721Token */.NG.Wallet.addERC721Token(tokenDetailed);
            onClose();
        }
    }, [
        contractDetailLoading,
        wallet,
        address,
        tokenId,
        erc721TokenDetailedCallback
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AddCollectibleDialogUI, {
        open: open,
        onClose: onClose,
        address: address,
        onAddressChange: setAddress,
        onTokenIdChange: setTokenId,
        onSubmit: onSubmit
    }));
});
const AddCollectibleDialogUI = /*#__PURE__*/ (0,react.memo)(({ open , onClose , onAddressChange , onTokenIdChange , onSubmit  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const schema = lib.z.object({
        address: lib.z.string().min(1).refine((address)=>dist.EthereumAddress.isValid(address)
        , t.wallets_incorrect_address()),
        tokenId: lib.z.string().min(1)
    });
    const { control , handleSubmit , setError , watch , reset , formState: { errors , isSubmitting , isValid  } ,  } = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            address: '',
            tokenId: ''
        }
    });
    (0,react.useEffect)(()=>{
        const subscription = watch((value)=>{
            onAddressChange(value.address);
            onTokenIdChange(value.tokenId);
        });
        return ()=>subscription.unsubscribe()
        ;
    }, [
        watch
    ]);
    const handleFormSubmit = (event)=>{
        handleSubmit(onSubmit)(event).catch((error)=>{
            setError('tokenId', {
                type: 'value',
                message: error.message === FormErrorType.Added ? t.wallets_collectible_been_added() : t.wallets_collectible_error_not_exist()
            });
        });
    };
    const handleClose = ()=>{
        reset();
        onClose();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* MaskDialog */.Df, {
        open: open,
        title: t.wallets_add_collectible(),
        onClose: handleClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
            onSubmit: handleFormSubmit,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                control: control,
                                render: ({ field  })=>{
                                    var ref;
                                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* MaskTextField */.FU, {
                                        ...field,
                                        label: t.wallets_collectible_address(),
                                        required: true,
                                        helperText: (ref = errors.address) === null || ref === void 0 ? void 0 : ref.message,
                                        error: !!errors.address
                                    }));
                                },
                                name: "address"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            sx: {
                                mt: 3
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                control: control,
                                render: ({ field  })=>{
                                    var ref;
                                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* MaskTextField */.FU, {
                                        ...field,
                                        label: t.wallets_collectible_token_id(),
                                        required: true,
                                        helperText: (ref = errors.tokenId) === null || ref === void 0 ? void 0 : ref.message,
                                        error: !!errors.tokenId
                                    }));
                                },
                                name: "tokenId"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                    sx: {
                        mt: 3
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                minWidth: 100
                            },
                            variant: "outlined",
                            color: "primary",
                            onClick: onClose,
                            children: t.cancel()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            disabled: isSubmitting || !isValid,
                            sx: {
                                minWidth: 100
                            },
                            color: "primary",
                            type: "submit",
                            children: t.wallets_collectible_add()
                        })
                    ]
                })
            ]
        })
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/TokenAssets/index.tsx












const TokenAssets_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        caption: {
            paddingRight: theme.spacing(2.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${theme_src/* MaskColorVar.lineLighter */.ZN.lineLighter}`
        },
        addCustomTokenButton: {
            borderRadius: Number(theme.shape.borderRadius) * 3.5,
            fontSize: theme.typography.caption.fontSize,
            lineHeight: theme.typography.pxToRem(16)
        },
        tab: {
            flex: 1,
            padding: '0px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        }
    })
);
var AssetTab;
(function(AssetTab1) {
    AssetTab1["Token"] = "Token";
    AssetTab1["Investment"] = "Investment";
    AssetTab1["Collections"] = "Collections";
})(AssetTab || (AssetTab = {
}));
const assetTabs = [
    AssetTab.Token,
    AssetTab.Collections
];
const TokenAssets = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = TokenAssets_useStyles();
    const assetTabsLabel = {
        [AssetTab.Token]: t.wallets_assets_token(),
        [AssetTab.Investment]: t.wallets_assets_investment(),
        [AssetTab.Collections]: t.wallets_assets_collections()
    };
    const [activeTab, setActiveTab] = (0,react.useState)(assetTabs[0]);
    const [addTokenOpen, setAddTokenOpen] = (0,react.useState)(false);
    const [addCollectibleOpen, setAddCollectibleOpen] = (0,react.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer/* ContentContainer */.O, {
                sx: {
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: 'calc(100% - 114px)'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                    value: activeTab,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.caption,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                                    value: activeTab,
                                    onChange: (event, tab)=>setActiveTab(tab)
                                    ,
                                    children: assetTabs.map((key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                            value: key,
                                            label: assetTabsLabel[key]
                                        }, key)
                                    )
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                                    color: "secondary",
                                    className: classes.addCustomTokenButton,
                                    onClick: ()=>activeTab === AssetTab.Token ? setAddTokenOpen(true) : setAddCollectibleOpen(true)
                                    ,
                                    children: [
                                        "+",
                                        ' ',
                                        activeTab === AssetTab.Token ? t.wallets_assets_custom_token() : t.wallets_assets_custom_collectible()
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: AssetTab.Token,
                            className: activeTab === AssetTab.Token ? classes.tab : undefined,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenTable, {
                            })
                        }, AssetTab.Token),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: AssetTab.Collections,
                            className: activeTab === AssetTab.Collections ? classes.tab : undefined,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleList, {
                            })
                        }, AssetTab.Collections)
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddTokenDialog, {
                open: addTokenOpen,
                onClose: ()=>setAddTokenOpen(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddCollectibleDialog, {
                open: addCollectibleOpen,
                onClose: ()=>setAddCollectibleOpen(false)
            })
        ]
    }));
});

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/buttonClasses.js
var buttonClasses = __webpack_require__(27361);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(12162);
=======
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/buttonClasses.js
var buttonClasses = __webpack_require__(70745);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(92131);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
;// CONCATENATED MODULE: ../icons/general/Send.tsx


const SendIcon = (0,utils/* createIcon */.I)('SendIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.488 2.513c.15.15.15.393 0 .543L7.856 8.688a.384.384 0 11-.543-.543l5.632-5.632c.15-.15.393-.15.543 0z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.486 2.515a.39.39 0 01.092.405L9.931 13.34a.39.39 0 01-.725.03L7.183 8.816 2.632 6.795a.39.39 0 01.03-.726L13.08 2.422a.39.39 0 01.405.093zM3.85 6.48l3.788 1.683c.088.04.159.11.198.199l1.683 3.787 3.053-8.722L3.85 6.48z",
            fill: "#fff"
        })
    ]
}), '0 0 16 16');

;// CONCATENATED MODULE: ../icons/general/Card.tsx


const CardIcon = (0,utils/* createIcon */.I)('CardIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            clipPath: "url(#card_clip0)",
            stroke: "#fff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M14.5 2.667h-12c-.737 0-1.333.597-1.333 1.333v8c0 .737.596 1.334 1.333 1.334h12c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333zM1.167 6.667h14.666"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: "card_clip0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#fff",
                    transform: "translate(.5)",
                    d: "M0 0h16v16H0z"
                })
            })
        })
    ]
}), '0 0 16 16');

;// CONCATENATED MODULE: ../icons/general/Swap.tsx


const SwapIcon = (0,utils/* createIcon */.I)('SwapIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.5 3.2c.221 0 .4.18.4.4v2.8h2.8a.4.4 0 110 .8H2.5a.4.4 0 01-.4-.4V3.6c0-.22.18-.4.4-.4zM10.9 9.2c0-.221.179-.4.4-.4h3.2c.22 0 .4.179.4.4v3.2a.4.4 0 01-.8 0V9.6h-2.8a.4.4 0 01-.4-.4z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.028 2.621a5.045 5.045 0 012.647-.083 5.218 5.218 0 012.356 1.277 5.626 5.626 0 011.478 2.318.437.437 0 01-.248.55.403.403 0 01-.522-.262 4.762 4.762 0 00-1.25-1.962 4.416 4.416 0 00-1.994-1.08 4.269 4.269 0 00-2.24.07 4.451 4.451 0 00-1.94 1.212L2.789 7.165a.394.394 0 01-.577-.019.448.448 0 01.018-.609l2.523-2.5a5.26 5.26 0 012.276-1.416zm7.761 6.233a.448.448 0 01-.018.61l-2.522 2.5a5.26 5.26 0 01-2.276 1.416 5.045 5.045 0 01-2.648.082 5.218 5.218 0 01-2.356-1.276 5.627 5.627 0 01-1.478-2.318.437.437 0 01.248-.55.403.403 0 01.522.262c.253.755.683 1.43 1.25 1.962a4.416 4.416 0 001.994 1.08c.74.177 1.511.152 2.24-.07a4.45 4.45 0 001.93-1.202l.01-.01 2.527-2.505a.394.394 0 01.577.02z",
            fill: "#fff"
        })
    ]
}), '0 0 16 16');

;// CONCATENATED MODULE: ../icons/general/Download.tsx


const DownloadIcon = (0,utils/* createIcon */.I)('DownloadIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M14 10v2.667A1.334 1.334 0 0112.667 14H3.333A1.334 1.334 0 012 12.667V10M4.667 6.667L8 10l3.333-3.333M8 10V2",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Balance/index.tsx






const BalanceContainer = (0,styled/* default */.ZP)('div')(({ theme  })=>`
    display: flex;
    justify-content: space-between;
    border-radius: 16px;
    align-items: center;
    padding: ${theme.spacing(2.5)};
    background: ${theme_src/* MaskColorVar.primaryBackground */.ZN.primaryBackground};
`
);
const IconContainer = (0,styled/* default */.ZP)('div')`
    // TODO: mobile
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme_src/* MaskColorVar.infoBackground */.ZN.infoBackground};
    border-radius: 50%;
`;
const BalanceDisplayContainer = (0,styled/* default */.ZP)('div')(({ theme  })=>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: ${theme.spacing(1)};
`
);
const BalanceTitle = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>`
  font-size: ${theme.typography.subtitle2.fontSize};
  color: ${theme_src/* MaskColorVar.iconLight */.ZN.iconLight};
`
);
const BalanceContent = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>`
    font-size: ${theme.typography.h6.fontSize};
    color: ${theme_src/* MaskColorVar.textPrimary */.ZN.textPrimary};
    line-height: ${theme.typography.h2.lineHeight};
`
);
const ButtonGroup = (0,styled/* default */.ZP)('div')`
    display: inline-grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    & > * {
        font-size: 12px;
        & .${buttonClasses/* default.endIcon */.Z.endIcon} > *:nth-of-type(1) {
            font-size: 16px;
            fill: none;
        }
    }
`;
const Balance = /*#__PURE__*/ (0,react.memo)(({ balance , onSend , onBuy , onSwap , onReceive  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(BalanceContainer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconContainer, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {
                            fontSize: "inherit"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(BalanceDisplayContainer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(BalanceTitle, {
                                children: t.wallets_balance()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(BalanceContent, {
                                children: isNaN(balance) ? '-' : balance.toLocaleString('en', {
                                    style: 'currency',
                                    currency: 'USD'
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonGroup, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: onSend,
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SendIcon, {
                            fontSize: "inherit"
                        }),
                        children: t.wallets_balance_Send()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: onBuy,
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardIcon, {
                            fill: "none",
                            fontSize: "inherit"
                        }),
                        children: t.wallets_balance_Buy()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: onSwap,
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapIcon, {
                            fontSize: "inherit"
                        }),
                        children: t.wallets_balance_Swap()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        onClick: onReceive,
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DownloadIcon, {
                            fontSize: "inherit",
                            style: {
                                stroke: theme_src/* MaskColorVar.textLink */.ZN.textLink
                            }
                        }),
                        children: t.wallets_balance_Receive()
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(81987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabList/TabList.js


const _excluded = ["children"];





const TabList = /*#__PURE__*/react.forwardRef(function TabList(props, ref) {
  const {
    children: childrenProp
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const children = react.Children.map(childrenProp, child => {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      return null;
    }

    return /*#__PURE__*/react.cloneElement(child, {
      // SOMEDAY: `Tabs` will set those themselves
      'aria-controls': (0,TabContext/* getPanelId */.uU)(context, child.props.value),
      id: (0,TabContext/* getTabId */.pQ)(context, child.props.value)
    });
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tabs/* default */.Z, (0,esm_extends/* default */.Z)({}, other, {
    ref: ref,
    value: context.value,
    children: children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabList_TabList = (TabList);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/Transfer/index.tsx







const Transfer_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        caption: {
            paddingRight: theme.spacing(2.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${theme_src/* MaskColorVar.lineLighter */.ZN.lineLighter}`
        }
    })
);
const Transfer = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes  } = Transfer_useStyles();
    const [currentTab, onChange, tabs] = (0,theme_src/* useTabs */.YE)('tokens');
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer/* ContentContainer */.O, {
        sx: {
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.caption,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: currentTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabList_TabList, {
                        onChange: onChange,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            label: "Token",
                            value: tabs.tokens
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.tokens,
                        children: "TBD"
                    })
                ]
            })
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(5075);
;// CONCATENATED MODULE: ../icons/general/Close.tsx


const CloseIcon = (0,utils/* createIcon */.I)('CloseIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M15 5L5 15M5 5l10 10",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../icons/general/RedPacket.tsx
var RedPacket = __webpack_require__(66402);
;// CONCATENATED MODULE: ../icons/general/Upload.tsx


const UploadIcon = (0,utils/* createIcon */.I)('UploadIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M25.5 20.5v3.333a1.666 1.666 0 01-1.667 1.667H12.167a1.666 1.666 0 01-1.667-1.667V20.5M22.168 14.668L18 10.501l-4.167 4.167M18.001 10.5v10",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');

;// CONCATENATED MODULE: ../icons/general/Interaction.tsx


const InteractionIcon = (0,utils/* createIcon */.I)('InteractionIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.1667 0.832031L17.5 4.16536L14.1667 7.4987",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M2.5 9.16797V7.5013C2.5 6.61725 2.85119 5.7694 3.47631 5.14428C4.10143 4.51916 4.94928 4.16797 5.83333 4.16797H17.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M5.83333 19.1667L2.5 15.8333L5.83333 12.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.5 10.832V12.4987C17.5 13.3828 17.1488 14.2306 16.5237 14.8557C15.8986 15.4808 15.0507 15.832 14.1667 15.832H2.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 20 20');

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/TransactionIcon/index.tsx








const TransactionIcon_useStyles = (0,theme_src/* makeStyles */.ZL)()(()=>({
        container: {
            width: 36,
            height: 36,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: theme_src/* MaskColorVar.warning.alpha */.ZN.warning.alpha(0.15)
        },
        success: {
            background: theme_src/* MaskColorVar.greenMain.alpha */.ZN.greenMain.alpha(0.15)
        },
        error: {
            background: theme_src/* MaskColorVar.redMain.alpha */.ZN.redMain.alpha(0.15)
        },
        icon: {
            fontSize: 20,
            fill: 'none'
        }
    })
);
const TransactionIcon = /*#__PURE__*/ (0,react.memo)(({ address , failed , transactionType  })=>{
    const { HAPPY_RED_PACKET_ADDRESS_V1 , HAPPY_RED_PACKET_ADDRESS_V2 , HAPPY_RED_PACKET_ADDRESS_V3  } = (0,src/* useRedPacketConstants */.AAz)();
    const isRedPacket = (0,src/* isSameAddress */.Wr$)(HAPPY_RED_PACKET_ADDRESS_V1, address) || (0,src/* isSameAddress */.Wr$)(HAPPY_RED_PACKET_ADDRESS_V2, address) || (0,src/* isSameAddress */.Wr$)(HAPPY_RED_PACKET_ADDRESS_V3, address);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionIconUI, {
        isRedPacket: isRedPacket,
        isFailed: failed,
        transactionType: transactionType
    }));
});
const TransactionIconUI = /*#__PURE__*/ (0,react.memo)(({ isFailed , isRedPacket , transactionType  })=>{
    const { classes  } = TransactionIcon_useStyles();
    const icon = (0,react.useMemo)(()=>{
        if (isFailed) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CloseIcon, {
            style: {
                stroke: theme_src/* MaskColorVar.redMain */.ZN.redMain
            },
            className: classes.icon
        }));
        if (isRedPacket) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacket/* RedPacketIcon */.t, {
            className: classes.icon
        }));
        switch(transactionType){
            case src/* FilterTransactionType.SEND */.slS.SEND:
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UploadIcon, {
                    style: {
                        stroke: theme_src/* MaskColorVar.warning */.ZN.warning
                    },
                    className: classes.icon
                }));
            case src/* FilterTransactionType.RECEIVE */.slS.RECEIVE:
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DownloadIcon, {
                    style: {
                        stroke: theme_src/* MaskColorVar.greenMain */.ZN.greenMain
                    },
                    className: classes.icon
                }));
            default:
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InteractionIcon, {
                    style: {
                        stroke: theme_src/* MaskColorVar.warning */.ZN.warning
                    },
                    className: classes.icon
                }));
        }
    }, [
        isFailed,
        isRedPacket,
        transactionType
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classnames_default()(classes.container, {
            [classes.error]: isFailed,
            [classes.success]: transactionType === src/* FilterTransactionType.RECEIVE */.slS.RECEIVE
        }),
        children: icon
    }));
});

;// CONCATENATED MODULE: ../icons/general/LinkOut.tsx


const LinkOutIcon = (0,utils/* createPaletteAwareIcon */.t)('LinkOutIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.5 2.5H17.5V7.5",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.33331 11.6667L17.5 2.5",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667",
            stroke: "white",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.5 2.5H17.5V7.5",
            stroke: "white",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.33325 11.6667L17.4999 2.5",
            stroke: "white",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 20 20');

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/HistoryTableRow/index.tsx











const HistoryTableRow_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        type: {
            marginLeft: 14
        },
        cell: {
            padding: '16px 28px',
            border: 'none',
            fontSize: theme.typography.pxToRem(14)
        },
        link: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme_src/* MaskColorVar.textPrimary */.ZN.textPrimary
        },
        linkIcon: {
            fill: 'none',
            fontSize: 20,
            marginLeft: 10
        },
        pair: {
            color: theme_src/* MaskColorVar.greenMain */.ZN.greenMain
        },
        send: {
            color: theme_src/* MaskColorVar.redMain */.ZN.redMain
        }
    })
);
const HistoryTableRow = /*#__PURE__*/ (0,react.memo)(({ transaction  })=>{
    const chainId = (0,src/* useChainId */.xxU)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTableRowUI, {
        transaction: transaction,
        chainId: chainId
    }));
});
const HistoryTableRowUI = /*#__PURE__*/ (0,react.memo)(({ transaction , chainId  })=>{
    const { classes  } = HistoryTableRow_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                variant: "body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    style: {
                        display: 'flex',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionIcon, {
                            transactionType: transaction.transactionType,
                            address: transaction.toAddress,
                            failed: transaction.failed
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.type,
                            children: transaction.type
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                children: transaction.pairs.map((pair, index)=>{
                    const direction = pair.direction === src/* DebankTransactionDirection.SEND */.Ej6.SEND || pair.direction === src/* ZerionTransactionDirection.OUT */.sox.OUT;
                    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classnames_default()(classes.pair, {
                            [classes.send]: direction
                        }),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: direction ? '-' : '+'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: pair.amount.toFixed(pair.amount < 1 ? 6 : 2)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                style: {
                                    color: theme_src/* MaskColorVar.textPrimary */.ZN.textPrimary,
                                    marginLeft: 10
                                },
                                children: pair.symbol
                            })
                        ]
                    }, index));
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontSize: "inherit",
                    children: (0,format/* default */.Z)(transaction.timeAt, 'yyyy-MM-dd HH:mm')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                align: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: `${(0,src/* resolveLinkOnExplorer */.CSY)(chainId)}/address/${transaction.toAddress}`,
                    className: classes.link,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: (0,src/* formatEthereumAddress */.j8w)(transaction.toAddress, 5)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkOutIcon, {
                            className: classes.linkIcon
                        })
                    ]
                })
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/HistoryTable/index.tsx












const HistoryTable_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        container: {
            height: 'calc(100% - 58px)',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 'calc(100% - 58px)'
        },
        header: {
            color: theme_src/* MaskColorVar.normalText */.ZN.normalText,
            fontWeight: theme.typography.fontWeightRegular,
            padding: '36px 0 12px',
            border: 'none',
            backgroundColor: theme_src/* MaskColorVar.primaryBackground */.ZN.primaryBackground
        },
        footer: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paginationItem: {
            borderRadius: 4,
            border: `1px solid ${theme_src/* MaskColorVar.lineLight */.ZN.lineLight}`,
            color: theme_src/* MaskColorVar.textPrimary */.ZN.textPrimary,
            '&.Mui-selected': {
                backgroundColor: theme_src/* MaskColorVar.blue */.ZN.blue,
                color: '#ffffff',
                border: 'none',
                '&:hover': {
                    backgroundColor: theme_src/* MaskColorVar.blue */.ZN.blue
                }
            }
        }
    })
);
const HistoryTable = /*#__PURE__*/ (0,react.memo)(()=>{
    const [page, setPage] = (0,react.useState)(0);
    const chainId = (0,src/* useChainId */.xxU)();
    const account = (0,src/* useAccount */.mAM)();
    const { value ={
        transactions: [],
        hasNextPage: false
    } , loading: transactionLoading , error: transactionError ,  } = (0,src/* useTransactions */.nCS)(account, page, 50);
    const { transactions =[] , hasNextPage  } = value;
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPage(0);
    }, [
        account,
        chainId
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTableUI, {
        page: page,
        onPageChange: setPage,
        hasNextPage: hasNextPage,
        isLoading: transactionLoading,
        isEmpty: !!transactionError || !transactions.length,
        dataSource: transactions
    }));
});
const HistoryTableUI = /*#__PURE__*/ (0,react.memo)(({ isLoading , isEmpty , dataSource , page , onPageChange , hasNextPage  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = HistoryTable_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                className: classes.container,
                children: isLoading || isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    flex: 1,
                    children: [
                        isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlacholder/* LoadingPlaceholder */.u, {
                        }) : null,
                        isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyPlaceholder, {
                            children: t.wallets_empty_history_tips()
                        }) : null
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
                    stickyHeader: true,
                    sx: {
                        padding: '0 44px'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_history_types()
                                    }, "Types"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_history_value()
                                    }, "Value"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_history_time()
                                    }, "Time"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        align: "center",
                                        variant: "head",
                                        className: classes.header,
                                        children: t.wallets_history_receiver()
                                    }, "Receiver")
                                ]
                            })
                        }),
                        dataSource.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                            children: dataSource.map((transaction, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTableRow, {
                                    transaction: transaction
                                }, index)
                            )
                        }) : null
                    ]
                })
            }),
            !(page === 0 && dataSource.length === 0) && !isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                count: -1,
                component: "div",
                onPageChange: noop/* default */.Z,
                page: page,
                rowsPerPage: 30,
                rowsPerPageOptions: [
                    30
                ],
                labelDisplayedRows: ()=>null
                ,
                backIconButtonProps: {
                    onClick: ()=>onPageChange((prev)=>prev - 1
                        )
                    ,
                    size: 'small',
                    disabled: page === 0
                },
                nextIconButtonProps: {
                    onClick: ()=>onPageChange((prev)=>prev + 1
                        )
                    ,
                    disabled: !hasNextPage,
                    size: 'small'
                }
            }) : null
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/History/index.tsx






const History_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    container: {
        flex: 1,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
    }
});
const History1 = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes  } = History_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer/* ContentContainer */.O, {
        sx: {
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 'calc(100% - 114px)'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTable, {
            })
        })
    }));
});


;// CONCATENATED MODULE: ../dashboard/src/components/WalletQRCodeContainer/index.tsx



const QRCodeContainer = (0,styled/* default */.ZP)('div')(({ width , height , border: { borderWidth , borderHeight  }  })=>`
    width: ${width}px;
    height: ${height}px;
    background: linear-gradient(to right, black ${borderHeight}px, transparent ${borderHeight}px) 0 0,
    linear-gradient(to right, black ${borderHeight}px, transparent ${borderHeight}px) 0 100%,
    linear-gradient(to left, black ${borderHeight}px, transparent ${borderHeight}px) 100% 0,
    linear-gradient(to left, black ${borderHeight}px, transparent ${borderHeight}px) 100% 100%,
    linear-gradient(to bottom, black ${borderHeight}px, transparent ${borderHeight}px) 0 0,
    linear-gradient(to bottom, black ${borderHeight}px, transparent ${borderHeight}px) 100% 0,
    linear-gradient(to top, black ${borderHeight}px, transparent ${borderHeight}px) 0 100%,
    linear-gradient(to top, black ${borderHeight}px, transparent ${borderHeight}px) 100% 100%;

    background-repeat: no-repeat;
    background-size: ${borderWidth}px ${borderWidth}px;
    padding: ${borderHeight}px;
`
);
const WalletQRCodeContainer = /*#__PURE__*/ (0,react.memo)((props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeContainer, {
        ...props,
        children: props.children
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(30699);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/ReceiveDialog/index.tsx











const ReceiveDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        paper: {
            width: '100%'
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        addressTitle: {
            marginTop: theme.spacing(1.5),
            color: theme_src/* MaskColorVar.normalText */.ZN.normalText
        },
        address: {
            marginTop: theme.spacing(1.5),
            fontWeight: 600
        }
    })
);
const ReceiveDialog = /*#__PURE__*/ (0,react.memo)(({ open , chainName , walletAddress , onClose  })=>{
    const currentSelectedWalletNetwork = useCurrentSelectedWalletNetwork();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ReceiveDialogUI, {
        open: open,
        chainName: chainName,
        walletAddress: walletAddress,
        onClose: onClose,
        currentNetworkType: currentSelectedWalletNetwork
    }));
});
const ReceiveDialogUI = /*#__PURE__*/ (0,react.memo)(({ open , currentNetworkType , chainName , onClose , walletAddress  })=>{
    const { classes  } = ReceiveDialog_useStyles();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const copyWalletAddress = (0,shared_src.useSnackbarCallback)({
        executor: async (address)=>copyToClipboard(address)
        ,
        deps: [],
        successText: t.wallets_address_copied()
    });
    //TODO: The <QRCode /> text prop protocol maybe correct and requires confirmation
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(theme_src/* MaskDialog */.Df, {
        open: open,
        title: t.wallets_balance_Receive(),
        onClose: onClose,
        DialogProps: {
            classes: {
                paper: classes.paper
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        sx: {
                            marginBottom: 3.5
                        },
                        children: t.wallets_receive_tips({
                            chainName
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletQRCodeContainer, {
                        width: 286,
                        height: 286,
                        border: {
                            borderWidth: 15,
                            borderHeight: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.QRCode, {
                            text: (0,src/* resolveNetworkAddress */.wg4)(currentNetworkType, walletAddress),
                            options: {
                                width: 282
                            },
                            canvasProps: {
                                style: {
                                    display: 'block',
                                    margin: 'auto'
                                }
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.addressTitle,
                        children: t.wallets_address()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.address,
                        children: walletAddress
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    size: "medium",
                    onClick: ()=>copyWalletAddress(walletAddress)
                    ,
                    children: t.wallets_address_copy()
                })
            })
        ]
    }));
});

// EXTERNAL MODULE: ../icons/general/Loading.tsx
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
var Loading = __webpack_require__(13230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useInterval.js
var useInterval = __webpack_require__(89008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(17952);
=======
var Loading = __webpack_require__(64345);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useInterval.js
var useInterval = __webpack_require__(28008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/hooks/useRecentTransactions.ts




const UPDATE_TRANSACTION_LATENCY = 30 /* seconds */  * 1000 /* milliseconds  */ ;
async function getTransactions(account, status) {
    if (!account) return [];
    const transactions = await API/* PluginServices.Wallet.getRecentTransactionsFromChain */.NG.Wallet.getRecentTransactionsFromChain(account);
    return transactions.filter((x)=>typeof status !== 'undefined' ? x.status === status : true
    );
}
// todo: should merge in plugin infra package when plugin infra ready
function useRecentTransactions(status) {
    const account = (0,src/* useAccount */.mAM)();
    const chainId = (0,src/* useChainId */.xxU)();
    const [flag, setFlag] = (0,react.useState)(false);
    // update transactions status intervally
    const [delay, setDelay] = (0,react.useState)(0);
    (0,useInterval/* default */.Z)(()=>setFlag((x)=>!x
        )
    , delay);
    // update transactions by message center
    (0,react.useEffect)(()=>API/* PluginMessages.Wallet.events.transactionsUpdated.on */.yC.Wallet.events.transactionsUpdated.on(()=>setFlag((x)=>!x
            )
        )
    , [
        setFlag
    ]);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        try {
            setDelay(0);
            return getTransactions(account, status);
        } catch (error) {
            throw error;
        } finally{
            setDelay(UPDATE_TRANSACTION_LATENCY);
        }
    }, [
        account,
        status,
        flag,
        chainId
    ]);
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/WalletStateBar/index.tsx










const WalletStateBar_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        bar: {
            minWidth: 80,
            borderRadius: 30,
            lineHeight: '28px',
            height: '28px',
            cursor: 'pointer'
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
        }
    })
);
const WalletStateBar = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const wallet = (0,src/* useWallet */.Osb)();
    const { providerType  } = (0,src/* useWeb3StateContext */.N9M)();
    const chainDetailed = (0,src/* useChainDetailed */.K1)();
    const chainColor = (0,src/* useChainColor */.x56)();
    const { value: pendingTransactions = []  } = useRecentTransactions(src/* TransactionStatusType.NOT_DEPEND */.g8n.NOT_DEPEND);
    const { openDialog: openConnectWalletDialog  } = (0,shared_src.useRemoteControlledDialog)(API/* PluginMessages.Wallet.events.selectProviderDialogUpdated */.yC.Wallet.events.selectProviderDialogUpdated);
    if (!wallet) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            onClick: openConnectWalletDialog,
            children: t.wallets_connect_wallet_connect()
        }));
    }
    var _name;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStateBarUI, {
        isPending: !!pendingTransactions.length,
        chain: chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.chain,
        chainColor: chainColor,
        providerType: providerType,
        openConnectWalletDialog: openConnectWalletDialog,
        walletName: (_name = wallet.name) !== null && _name !== void 0 ? _name : '',
        walletAddress: wallet.address
    }));
});
const WalletStateBarUI = /*#__PURE__*/ (0,react.memo)(({ chain , isPending , providerType , chainColor , walletAddress , walletName , openConnectWalletDialog  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = WalletStateBar_useStyles();
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
                    background: chainColor.replace(')', ', 0.1)'),
                    px: 2,
                    mr: 1
                },
                color: chainColor,
                className: classes.bar,
                onClick: openConnectWalletDialog,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        sx: {
                            background: chainColor
                        },
                        className: classes.dot
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        fontSize: 12,
                        children: chain
                    })
                ]
            }),
            isPending && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    px: 2,
                    background: theme_src/* MaskColorVar.orangeMain.alpha */.ZN.orangeMain.alpha(0.1),
                    color: theme_src/* MaskColorVar.orangeMain */.ZN.orangeMain
                },
                className: classes.bar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Loading/* LoadingIcon */.H, {
                        sx: {
                            fontSize: 12,
                            mr: 0.8,
                            color: theme_src/* MaskColorVar.orangeMain */.ZN.orangeMain
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                mx: 1,
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.ProviderIcon, {
                    providerType: providerType
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    userSelect: 'none'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        fontSize: 16,
                        children: walletName
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        fontSize: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedAddress, {
                            address: walletAddress,
                            size: 10
                        })
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/index.tsx

















function Wallets() {
    const wallet = (0,src/* useWallet */.Osb)();
    const wallets = (0,src/* useWallets */.rBi)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [receiveOpen, setReceiveOpen] = (0,react.useState)(false);
    const erc20Tokens = (0,src/* useTrustedERC20Tokens */.du_)();
    const { openDialog: openBuyDialog  } = (0,shared_src.useRemoteControlledDialog)(API/* PluginMessages.Transak.buyTokenDialogUpdated */.yC.Transak.buyTokenDialogUpdated);
    const { openDialog: openSwapDialog  } = (0,shared_src.useRemoteControlledDialog)(API/* PluginMessages.Swap.swapDialogUpdated */.yC.Swap.swapDialogUpdated);
    const { value: detailedTokens  } = (0,src/* useAssets */.LiV)(erc20Tokens || []);
    const balance = (0,react.useMemo)(()=>{
        return bignumber_default().sum.apply(null, detailedTokens.map((asset)=>(0,src/* getTokenUSDValue */.pLw)(asset)
        )).toNumber();
    }, [
        detailedTokens
    ]);
    var _address;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(DashboardFrame/* PageFrame */.C, {
        title: wallets.length === 0 ? 'Create a Wallet' : 'Market',
        noBackgroundFill: true,
        primaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStateBar, {
        }),
        children: [
            wallets.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(StartUp, {
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Balance, {
                        balance: balance,
                        onSend: ()=>navigate(type/* RoutePaths.WalletsTransfer */.s2.WalletsTransfer)
                        ,
                        onBuy: openBuyDialog,
                        onSwap: openSwapDialog,
                        onReceive: ()=>setReceiveOpen(true)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                path: "/",
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAssets, {
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                path: "transfer",
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transfer, {
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                path: "history",
                                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(History1, {
                                })
                            })
                        ]
                    })
                ]
            }),
            wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReceiveDialog, {
                open: receiveOpen,
                chainName: "Ethereum",
                walletAddress: (_address = wallet.address) !== null && _address !== void 0 ? _address : '',
                onClose: ()=>setReceiveOpen(false)
            }) : null
        ]
    }));
}
/* harmony default export */ function pages_Wallets() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Wallets, {
    }));
};


/***/ }),

/***/ 24846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ MaskWalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const MaskWalletIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Wallet', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M38 27.006v-.363h.819a.181.181 0 110 .363H38z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M12 19.81c0-2.104 1.606-3.81 3.586-3.81h18.828C36.394 16 38 17.706 38 19.81v12.38c0 2.104-1.606 3.81-3.586 3.81H15.586C13.606 36 12 34.294 12 32.19V19.81z",
                fill: "#1C68F3",
                fillOpacity: ".4"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M28.87 25.142a8 8 0 11-8-13.856 8 8 0 018 13.856z",
            fill: "url(#mask_wallet_paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.878 18.982l1.307 2.264 6.792-3.921.292-.17a3.557 3.557 0 01-5.375 4.01l-1.317.76 1.098 1.902c.26.45.835.604 1.286.345l6.52-3.765a.941.941 0 00.345-1.286l-2.797-4.845-8.151 4.706zm3.797 1.732a2.769 2.769 0 002.587-.098 2.768 2.768 0 001.378-2.191l-3.965 2.289zm2.335-4.548a1.465 1.465 0 011.883.362l-.695.401a.68.68 0 00-1.12.647l-.695.401a1.465 1.465 0 01.627-1.811zm-3.487 2.013a1.464 1.464 0 011.883.362l-.695.401a.68.68 0 00-1.12.647l-.695.401a1.464 1.464 0 01.627-1.811zm-3.268-2.158a.941.941 0 00-.345 1.285l.575.997 8.151-4.706-.575-.996a.941.941 0 00-1.285-.345l-6.521 3.765z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M12 23.79c0-2.093 1.606-3.79 3.586-3.79h18.828C36.394 20 38 21.697 38 23.79v10.42c0 2.093-1.606 3.79-3.586 3.79H15.586C13.606 38 12 36.303 12 34.21V23.79z",
                fill: "#1C68F3",
                fillOpacity: ".05"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".8",
            d: "M39 26.824V30.5a.5.5 0 01-.5.5H35a2 2 0 010-4h3.5c.5 0 .5-.176.5-.176z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
            cx: "35",
            cy: "29",
            r: "1",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "8",
                    y: "12",
                    width: "34",
                    height: "28",
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
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter1_b",
                    x: "8",
                    y: "16",
                    width: "34",
                    height: "26",
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
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "mask_wallet_paint0_linear",
                    x1: "31.433",
                    y1: "13.777",
                    x2: "16.29",
                    y2: "20.004",
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


/***/ }),

/***/ 93714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MiniMaskIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const MiniMaskIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('MiniMask', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "white"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            opacity: "0.5",
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "rgba(0,0,0,0.2)"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "rgba(0,0,0,0.2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), '0 0 48 48');


/***/ }),

/***/ 23662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ CloudLinkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const CloudLinkIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('CloudLink', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M30.798 17.565c.796.33 1.503.841 2.066 1.492a5.497 5.497 0 01.106 7.081l-3.144 3.86a5.57 5.57 0 01-7.769.77 5.503 5.503 0 01-.858-7.721l3.007-3.694.096.908c.067.638.287 1.223.62 1.723l-1.999 2.454a3.309 3.309 0 00-.724 2.432 3.303 3.303 0 001.216 2.23 3.337 3.337 0 002.445.72 3.343 3.343 0 002.24-1.21l3.145-3.864a3.306 3.306 0 00-1.947-5.337l1.502-1.844h-.002zm-1.671 6.962a5.548 5.548 0 01-2.066-1.492 5.511 5.511 0 01-1.214-4.793 5.511 5.511 0 011.108-2.288l3.144-3.86a5.542 5.542 0 013.741-2.06 5.576 5.576 0 014.103 1.197 5.53 5.53 0 012.03 3.744 5.499 5.499 0 01-1.248 4.07L35.72 22.74l-.095-.907a3.838 3.838 0 00-.62-1.725l1.998-2.452a3.303 3.303 0 00-.492-4.662 3.343 3.343 0 00-4.686.49l-3.144 3.862a3.307 3.307 0 00-.543 3.217c.196.537.528 1.015.964 1.387.437.372.962.625 1.526.735l-1.502 1.843h.002z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M32.25 27.5A9.409 9.409 0 0023 20c-3.625 0-6.75 2-8.25 5.004C10.875 25.5 8 28.622 8 32.503 8 36.625 11.375 40 15.5 40h16.25A6.19 6.19 0 0038 33.868v-.12c0-3.25-2.625-5.998-5.75-6.251",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                id: "filter0_b",
                x: "5",
                y: "17",
                width: "36",
                height: "26",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                        in: "BackgroundImage",
                        stdDeviation: "1.5"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                        in2: "SourceAlpha",
                        operator: "in",
                        result: "effect1_backgroundBlur"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_backgroundBlur",
                        result: "shape"
                    })
                ]
            })
        })
    ]
}), '0 0 48 48');


/***/ }),

/***/ 2919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ImportWalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const ImportWalletIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Index', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M8 22.19C8 19.877 9.976 18 12.414 18h23.172C38.024 18 40 19.876 40 22.19v13.62c0 2.314-1.976 4.19-4.414 4.19H12.414C9.976 40 8 38.124 8 35.81V22.19z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M33.129 20.012a1.5 1.5 0 01-.141 2.117l-8 7a1.5 1.5 0 01-1.976 0l-8-7a1.5 1.5 0 011.976-2.258l5.512 4.823V8a1.5 1.5 0 013 0v16.694l5.512-4.823a1.5 1.5 0 012.117.141z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M8 25.79C8 23.697 9.976 22 12.414 22h23.172C38.024 22 40 23.697 40 25.79v10.42c0 2.093-1.976 3.79-4.414 3.79H12.414C9.976 40 8 38.303 8 36.21V25.79z",
                fill: "#1C68F3",
                fillOpacity: ".05"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "4",
                    y: "14",
                    width: "40",
                    height: "30",
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
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter1_b",
                    x: "5",
                    y: "19",
                    width: "38",
                    height: "24",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "1.5"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 48 48');


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
/***/ 13230:
=======
/***/ 64345:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ LoadingIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);
=======
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js


const LoadingIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Loading', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 1.18506C10.3452 1.18506 10.625 1.46488 10.625 1.81006V5.14339C10.625 5.48857 10.3452 5.76839 10 5.76839C9.65482 5.76839 9.375 5.48857 9.375 5.14339V1.81006C9.375 1.46488 9.65482 1.18506 10 1.18506Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 14.5183C10.3452 14.5183 10.625 14.7981 10.625 15.1433V18.4766C10.625 18.8218 10.3452 19.1016 10 19.1016C9.65482 19.1016 9.375 18.8218 9.375 18.4766V15.1433C9.375 14.7981 9.65482 14.5183 10 14.5183Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.66548 3.80977C3.90956 3.56569 4.30529 3.56569 4.54936 3.80977L6.9077 6.1681C7.15177 6.41218 7.15177 6.80791 6.9077 7.05198C6.66362 7.29606 6.26789 7.29606 6.02381 7.05198L3.66548 4.69365C3.4214 4.44957 3.4214 4.05384 3.66548 3.80977Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.0913 13.2348C13.3353 12.9907 13.7311 12.9907 13.9751 13.2348L16.3335 15.5931C16.5776 15.8372 16.5776 16.233 16.3335 16.477C16.0894 16.7211 15.6937 16.7211 15.4496 16.477L13.0913 14.1187C12.8472 13.8746 12.8472 13.4789 13.0913 13.2348Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.04102 10.1433C1.04102 9.79813 1.32084 9.51831 1.66602 9.51831H4.99935C5.34453 9.51831 5.62435 9.79813 5.62435 10.1433C5.62435 10.4885 5.34453 10.7683 4.99935 10.7683H1.66602C1.32084 10.7683 1.04102 10.4885 1.04102 10.1433Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.375 10.1433C14.375 9.79813 14.6548 9.51831 15 9.51831H18.3333C18.6785 9.51831 18.9583 9.79813 18.9583 10.1433C18.9583 10.4885 18.6785 10.7683 18.3333 10.7683H15C14.6548 10.7683 14.375 10.4885 14.375 10.1433Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.9077 13.2348C7.15177 13.4789 7.15177 13.8746 6.9077 14.1187L4.54936 16.477C4.30529 16.7211 3.90956 16.7211 3.66548 16.477C3.4214 16.233 3.4214 15.8372 3.66548 15.5931L6.02381 13.2348C6.26789 12.9907 6.66362 12.9907 6.9077 13.2348Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.3335 3.80977C16.5776 4.05384 16.5776 4.44957 16.3335 4.69365L13.9751 7.05198C13.7311 7.29606 13.3353 7.29606 13.0913 7.05198C12.8472 6.80791 12.8472 6.41218 13.0913 6.1681L15.4496 3.80977C15.6937 3.56569 16.0894 3.56569 16.3335 3.80977Z",
            fill: "currentColor"
        })
    ]
}), '0 0 20 20');


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.3360.js
/***/ 59139:
=======
/***/ 66402:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1321.js
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


/***/ })

}]);