"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9185],{

/***/ 99185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CreateWallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
;// CONCATENATED MODULE: ../dashboard/src/components/CreateWalletFrame/index.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()({
    root: {
        padding: '3vw',
        minHeight: '100vh',
        backgroundColor: entry/* MaskColorVar.bottom */.ZN.bottom,
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        backgroundColor: entry/* MaskColorVar.background */.ZN.background,
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});
const CreateMaskWalletFrame = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.container,
            children: props.children
        })
    });
});

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
;// CONCATENATED MODULE: ../dashboard/src/pages/CreateMaskWallet/index.tsx





const Welcome = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8361).then(__webpack_require__.bind(__webpack_require__, 98361))
);
const CreateWalletForm = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(4300)]).then(__webpack_require__.bind(__webpack_require__, 44300))
);
const CreateMnemonic = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(9759), __webpack_require__.e(1403)]).then(__webpack_require__.bind(__webpack_require__, 50676))
);
const r = (0,src/* relativeRouteOf */.zD)(src/* DashboardRoutes.CreateMaskWallet */.vq.CreateMaskWallet);
function CreateWallet() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateMaskWalletFrame, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: "*",
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Welcome, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: r(src/* DashboardRoutes.CreateMaskWalletForm */.vq.CreateMaskWalletForm),
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateWalletForm, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: r(src/* DashboardRoutes.CreateMaskWalletMnemonic */.vq.CreateMaskWalletMnemonic),
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateMnemonic, {})
                })
            ]
        })
    });
};


/***/ })

}]);