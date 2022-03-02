"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8913],{

/***/ 8913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RequestPermissionPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-rc.0/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(22749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90773);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListSubheader/ListSubheader.js + 1 modules
var ListSubheader = __webpack_require__(39787);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(28532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(17060);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(47673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/RequestPermission.tsx



function RequestPermission(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { origins , permissions  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.Z, {
                children: t('popups_mask_requests_permission')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    (origins === null || origins === void 0 ? void 0 : origins.length) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        dense: true,
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSubheader/* default */.Z, {
                            children: t('popups_sites')
                        }),
                        children: origins === null || origins === void 0 ? void 0 : origins.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                    primary: x
                                })
                            }, x)
                        )
                    }) : null,
                    (permissions === null || permissions === void 0 ? void 0 : permissions.length) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        dense: true,
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSubheader/* default */.Z, {
                            children: t('popups_permissions')
                        }),
                        children: permissions === null || permissions === void 0 ? void 0 : permissions.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                    primary: x
                                })
                            }, x)
                        )
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: props.onCancel,
                        variant: "text",
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: props.onRequestApprove,
                        variant: "contained",
                        children: t('approve')
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/index.tsx






const acceptable = [
    'alarms',
    'clipboardRead',
    'clipboardWrite',
    'contextMenus',
    'contextualIdentities',
    'menus',
    'notifications',
    'webRequestBlocking', 
];
function isAcceptablePermission(x) {
    return acceptable.includes(x);
}
function RequestPermissionPage() {
    const param = (0,react_router/* useLocation */.TH)();
    const _ = new URLSearchParams(param.search);
    const origins = _.getAll('origins');
    const permissions = _.getAll('permissions').filter(isAcceptablePermission);
    const { retry , value: hasPermission  } = (0,useAsyncRetry/* default */.Z)(()=>browser.permissions.contains({
            origins,
            permissions
        })
    , [
        param.search
    ]);
    (0,react.useEffect)(()=>{
        if (hasPermission) window.close();
    }, [
        hasPermission
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        sx: {
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RequestPermission, {
            onCancel: ()=>window.close()
            ,
            onRequestApprove: ()=>browser.permissions.request({
                    origins,
                    permissions
                }).finally(retry)
            ,
            origins: origins,
            permissions: permissions
        })
    }));
};


/***/ })

}]);