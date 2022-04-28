"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6679],{

/***/ 66679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ../plugins/CrossChainBridge/src/base.ts + 7 modules
var base = __webpack_require__(56003);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(31008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(43966);
;// CONCATENATED MODULE: ../plugins/CrossChainBridge/src/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "io.mask.cross-chain-bridge", ...props })
function useI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("io.mask.cross-chain-bridge")
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
;// CONCATENATED MODULE: ../plugins/CrossChainBridge/src/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts


// EXTERNAL MODULE: ../plugins/CrossChainBridge/src/constants.tsx + 1 modules
var constants = __webpack_require__(78569);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
;// CONCATENATED MODULE: ../plugins/CrossChainBridge/src/SNSAdaptor/CrossChainBridgeDialog.tsx






const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: 600
        },
        paperRoot: {
            backgroundImage: 'none',
            '&>h2': {
                height: 30,
                border: `1px solid ${theme.palette.divider}`,
                padding: theme.spacing(1.875, 2.5, 1.875, 2.5),
                marginBottom: 24
            }
        },
        content: {
            width: 552,
            maxHeight: 510,
            paddingBottom: theme.spacing(3)
        },
        bridgeItem: {
            display: 'flex',
            padding: '12px',
            ':hover': {
                backgroundColor: theme.palette.background.default,
                cursor: 'pointer'
            }
        },
        bridgeInfo: {
            marginLeft: '8px'
        },
        bridgeName: {
            fontSize: '24px',
            fontWeight: 600,
            display: 'flex'
        },
        bridgeIntro: {
            fontSize: '12px',
            fontWeight: 400,
            color: theme.palette.grey[700]
        },
        officialTag: {
            width: '39px',
            height: '15px',
            fontSize: '12px',
            fontWeight: 700,
            alignSelf: 'center',
            borderRadius: '8px',
            backgroundColor: 'rgba(28, 104, 243, 0.1)',
            color: '#1c68f3',
            padding: '4px 12px 6px 8px',
            marginLeft: '4px'
        }
    })
);
function CrossChainBridgeDialog(props) {
    const t = useI18N();
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const { open , onClose  } = props;
    const bridges = (0,constants/* getCrossChainBridge */.l8)(t);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        DialogProps: {
            classes: {
                paper: classes.paperRoot
            }
        },
        title: t.dialog_title(),
        open: open,
        onBack: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                height: "100%",
                spacing: 2,
                children: bridges?.map((bridge)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.bridgeItem,
                        onClick: ()=>(0,shared_base_ui_src/* openWindow */.xw)(bridge?.link)
                        ,
                        children: [
                            bridge?.icon,
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.bridgeInfo,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.bridgeName,
                                        children: [
                                            bridge?.name,
                                            bridge?.isOfficial && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.officialTag,
                                                children: t.official()
                                            })
                                        ]
                                    }),
                                    bridge?.intro && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.bridgeIntro,
                                        children: bridge.intro
                                    })
                                ]
                            })
                        ]
                    }, bridge?.ID)
                )
            })
        })
    });
}

;// CONCATENATED MODULE: ../plugins/CrossChainBridge/src/SNSAdaptor/index.tsx





const sns = {
    ...base/* base */.u,
    init (signal, context) {},
    ApplicationEntries: [
        {
            RenderEntryComponent ({ disabled  }) {
                const [open, setOpen] = (0,react.useState)(false);
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ApplicationEntry */.Tv, {
                            title: "Cross-chain",
                            disabled: disabled,
                            icon: new URL(/* asset import */ __webpack_require__(58217), __webpack_require__.b).toString(),
                            onClick: ()=>setOpen(true)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CrossChainBridgeDialog, {
                            open: open,
                            onClose: ()=>setOpen(false)
                        })
                    ]
                });
            },
            defaultSortingPriority: 2
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 58217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/16ba5851b0b05d390bf1.png";

/***/ })

}]);