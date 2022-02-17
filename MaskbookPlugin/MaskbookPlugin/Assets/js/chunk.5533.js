"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9373],{

/***/ 99373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RequestPermissionPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(27019);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogTitle/DialogTitle.js + 1 modules
var DialogTitle = __webpack_require__(20481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListSubheader/ListSubheader.js + 1 modules
var ListSubheader = __webpack_require__(77602);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/RequestPermission.tsx



const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            margin: theme.spacing(2, 2, 2, 2)
        }
    })
);
function RequestPermission(props) {
    const { classes  } = useStyles();
    const { origins , permissions  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.Z, {
                children: "Mask needs the following permissions"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    (origins === null || origins === void 0 ? void 0 : origins.length) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        dense: true,
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSubheader/* default */.Z, {
                            children: "Sites"
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
                            children: "Permissions"
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
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: props.onRequestApprove,
                        variant: "contained",
                        children: "Approve"
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