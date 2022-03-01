"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6653],{

/***/ 46653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../plugins/Debugger/src/base.ts + 7 modules
var base = __webpack_require__(91254);
// EXTERNAL MODULE: ../plugins/Debugger/src/constants.ts
var constants = __webpack_require__(84778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(89729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90773);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(28532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(17060);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
;// CONCATENATED MODULE: ../plugins/Debugger/src/SNSAdaptor/components/TabContent.tsx



function TabContent({ identity , addressNames  }) {
    const renderIdentity = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Nickname"
                        }),
                        secondary: identity === null || identity === void 0 ? void 0 : identity.nickname
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Bio"
                        }),
                        secondary: identity === null || identity === void 0 ? void 0 : identity.bio
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Home Page"
                        }),
                        secondary: identity === null || identity === void 0 ? void 0 : identity.homepage
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                    sx: {
                        display: 'block'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                            primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textPrimary",
                                children: "Avatar"
                            }),
                            secondary: identity === null || identity === void 0 ? void 0 : identity.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            sx: {
                                mt: 1
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: identity === null || identity === void 0 ? void 0 : identity.avatar
                            })
                        })
                    ]
                })
            ]
        }));
    };
    const renderAddressNames = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            children: addressNames === null || addressNames === void 0 ? void 0 : addressNames.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: [
                                x.type,
                                ": ",
                                x.label
                            ]
                        }),
                        secondary: x.resolvedAddress
                    })
                }, x.type)
            )
        }));
    };
    const { value: balance = '0'  } = (0,src/* useBalance */.KQ)();
    const { value: blockNumber = 0  } = (0,src/* useBlockNumber */.Ov)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                color: "textPrimary",
                variant: "h6",
                children: [
                    "Balance ",
                    balance,
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    "BlockNumber ",
                    blockNumber,
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                variant: "h6",
                children: "Identity"
            }),
            renderIdentity(),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                variant: "h6",
                children: "Address Names"
            }),
            renderAddressNames()
        ]
    }));
}

;// CONCATENATED MODULE: ../plugins/Debugger/src/SNSAdaptor/index.tsx



const sns = {
    ...base/* base */.u,
    init (signal) {},
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_tabContent`,
            label: 'Debugger',
            priority: 99999,
            UI: {
                TabContent: TabContent
            }
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ })

}]);