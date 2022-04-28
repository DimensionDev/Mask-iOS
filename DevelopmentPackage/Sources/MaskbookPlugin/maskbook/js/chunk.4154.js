"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4154],{

/***/ 34154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PermissionAwareRedirectUI": () => (/* reexport */ PermissionAwareRedirectUI),
  "default": () => (/* binding */ PermissionAwareRedirect)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(3543);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(63258);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(31008);
;// CONCATENATED MODULE: ./src/extension/popups/PermissionAwareRedirect/ui.tsx




function PermissionAwareRedirectUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    if (props.granted) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                t('redirect_to'),
                " ",
                props.url,
                ".",
                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                    i18nKey: "redirect_alert",
                    components: {
                        terms: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            href: props.url
                        })
                    }
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        children: t('popups_permission_request')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        children: t('popups_permission_request_content')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        children: props.url
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        children: t('popups_permission_request_content2')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
                sx: {
                    flexDirection: 'row-reverse'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        onClick: props.onRequest,
                        children: t('popups_grant')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: props.onCancel,
                        children: t('cancel')
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0_react@18.0.0/node_modules/react-router/index.js
var react_router = __webpack_require__(10459);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
;// CONCATENATED MODULE: ./src/extension/popups/MissingParameter/index.tsx



function MissingParameter(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h5",
                    children: props.message
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "caption",
                    children: t('popups_missing_parameter_caption')
                })
            ]
        })
    });
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
    if (!url) return /*#__PURE__*/ (0,jsx_runtime.jsx)(MissingParameter, {
        message: "Parameter URL not found."
    });
    if (!context) return /*#__PURE__*/ (0,jsx_runtime.jsx)(MissingParameter, {
        message: "Parameter context not found."
    });
    if (!isValidURL(url)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(MissingParameter, {
        message: "Parameter URL is not valid."
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Inner, {
        url: url,
        context: context
    });
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
        if (!hasPermission) return;
        const parsed = new URL(url);
        parsed.searchParams.append('mask_context', context);
        location.assign(parsed.toString());
    }, [
        hasPermission,
        url
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionAwareRedirectUI, {
        url: url,
        granted: !!hasPermission,
        onCancel: ()=>window.close()
        ,
        onRequest: ()=>{
            browser.permissions.request({
                origins: [
                    getHostPermissionFieldFromURL(url)
                ]
            }).finally(retry);
        }
    });
}


/***/ })

}]);