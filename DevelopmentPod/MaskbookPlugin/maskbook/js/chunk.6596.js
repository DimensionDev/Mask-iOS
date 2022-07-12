"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6596],{

/***/ 76596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RequestPermissionPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(13305);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListSubheader/ListSubheader.js + 1 modules
var ListSubheader = __webpack_require__(72881);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/RequestPermission.tsx



function RequestPermission(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { origins , permissions  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.Z, {
                children: t('popups_mask_requests_permission')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    origins?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        dense: true,
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSubheader/* default */.Z, {
                            children: t('popups_sites')
                        }),
                        children: origins?.map((origin, key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                    primary: origin
                                })
                            }, key)
                        )
                    }) : null,
                    permissions?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        dense: true,
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSubheader/* default */.Z, {
                            children: t('popups_permissions')
                        }),
                        children: permissions?.map((permission, key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                    primary: permission
                                })
                            }, key)
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
    });
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
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
    });
};


/***/ })

}]);