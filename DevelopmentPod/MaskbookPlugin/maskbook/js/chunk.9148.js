"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9148],{

/***/ 19148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../plugins/Debugger/src/base.ts + 7 modules
var base = __webpack_require__(87946);
// EXTERNAL MODULE: ../plugins/Debugger/src/constants.ts
var constants = __webpack_require__(58202);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(20476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(16451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(43754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
;// CONCATENATED MODULE: ../plugins/Debugger/src/SNSAdaptor/components/TabContent.tsx




const useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        overflow: 'auto'
    }
});
function TabContent({ identity , addressNames  }) {
    const { classes  } = useStyles();
    const renderIdentity = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Nickname"
                        }),
                        secondary: identity?.nickname
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Bio"
                        }),
                        secondary: identity?.bio
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textPrimary",
                            children: "Home Page"
                        }),
                        secondary: identity?.homepage
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
                            secondary: identity?.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            sx: {
                                mt: 1
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: identity?.avatar
                            })
                        })
                    ]
                })
            ]
        });
    };
    const renderAddressNames = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            children: addressNames?.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
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
        });
    };
    const { value: balance = '0'  } = (0,entry_web3/* useBalance */.KQ)();
    const { value: blockNumber = 0  } = (0,entry_web3/* useBlockNumber */.Ov)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.container,
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
    });
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