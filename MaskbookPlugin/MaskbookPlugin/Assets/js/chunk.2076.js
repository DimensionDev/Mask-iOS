"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4626],{

/***/ 23248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ MissingParameter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25933);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76729);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49283);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37186);



function MissingParameter(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .useI18N */ .M1)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    variant: "h5",
                    children: props.message
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    variant: "caption",
                    children: t('popups_missing_parameter_caption')
                })
            ]
        })
    }));
}


/***/ }),

/***/ 24626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PermissionAwareRedirectUI": () => (/* reexport */ PermissionAwareRedirectUI),
  "default": () => (/* binding */ PermissionAwareRedirect)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(27019);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/extension/popups/MissingParameter/index.tsx
var MissingParameter = __webpack_require__(23248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(76729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(74454);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
;// CONCATENATED MODULE: ./src/extension/popups/PermissionAwareRedirect/ui.tsx


function PermissionAwareRedirectUI(props) {
    if (props.granted) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                "Redirect to ",
                props.url,
                ".",
                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                }),
                "If your browser does not redirect, please ",
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                    href: props.url,
                    children: "click here"
                }),
                "."
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h5",
                        children: "Mask need permission for:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "caption",
                        children: props.url
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: props.onRequest,
                    children: "Grant"
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/extension/popups/PermissionAwareRedirect/utils.ts
function getHostPermissionFieldFromURL(url) {
    const u = new URL(url);
    return `*://${u.hostname}/*`;
}
function isValidURL(url) {
    try {
        const u = new URL(url);
        return u.protocol.startsWith('http');
    } catch  {
        return false;
    }
}

;// CONCATENATED MODULE: ./src/extension/popups/PermissionAwareRedirect/index.tsx









function PermissionAwareRedirect() {
    const url = new URLSearchParams((0,react_router/* useLocation */.TH)().search).get('url');
    const context = new URLSearchParams((0,react_router/* useLocation */.TH)().search).get('context');
    if (!url) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MissingParameter/* MissingParameter */.G, {
        message: "Parameter URL not found."
    }));
    if (!context) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MissingParameter/* MissingParameter */.G, {
        message: "Parameter context not found."
    }));
    if (!isValidURL(url)) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MissingParameter/* MissingParameter */.G, {
        message: "Parameter URL is not valid."
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Inner, {
        url: url,
        context: context
    }));
};
function Inner({ url , context  }) {
    const { value: hasPermission , retry  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!url) return false;
        return browser.permissions.contains({
            origins: [
                getHostPermissionFieldFromURL(url)
            ]
        });
    }, [
        url
    ]);
    (0,react.useEffect)(()=>{
        if (hasPermission) {
            service/* default.ThirdPartyPlugin.enableSDK */.ZP.ThirdPartyPlugin.enableSDK(new URL('./', url).href).then(()=>{
                const u = new URL(url);
                u.searchParams.append('mask_context', context);
                location.href = u.toString();
            });
        }
    }, [
        hasPermission,
        url
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionAwareRedirectUI, {
        url: url,
        granted: !!hasPermission,
        onRequest: ()=>{
            browser.permissions.request({
                origins: [
                    getHostPermissionFieldFromURL(url)
                ]
            }).finally(retry);
        }
    }));
}


/***/ })

}]);