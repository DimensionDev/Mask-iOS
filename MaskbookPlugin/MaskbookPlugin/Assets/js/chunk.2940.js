"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5493],{

/***/ 15493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CreateWallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
;// CONCATENATED MODULE: ../dashboard/src/components/CreateWalletFrame/index.tsx




const useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        width: '100vw',
        height: '100vh',
        padding: '3vw',
        backgroundColor: src/* MaskColorVar.lightBackground */.ZN.lightBackground
    },
    container: {
        contain: 'strict',
        backgroundColor: src/* MaskColorVar.white */.ZN.white,
        borderRadius: 24,
        width: '100%',
        height: '100%',
        minHeight: 832
    }
});
const CreateMaskWalletFrame = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.container,
            children: props.children
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.2_2dbba68b7ac16965ba4a12f4e1c41a15/node_modules/react-router/index.js
var react_router = __webpack_require__(18875);
;// CONCATENATED MODULE: ../dashboard/src/pages/CreateMaskWallet/index.tsx




<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.2940.js
const Welcome = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(4281), __webpack_require__.e(7889)]).then(__webpack_require__.bind(__webpack_require__, 57889))
=======
const Welcome = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(8416), __webpack_require__.e(8252)]).then(__webpack_require__.bind(__webpack_require__, 28252))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5493.js
);
const CreateWalletForm = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2598), __webpack_require__.e(6230), __webpack_require__.e(5661)]).then(__webpack_require__.bind(__webpack_require__, 95661))
);
const CreateMnemonic = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(9759), __webpack_require__.e(9146)]).then(__webpack_require__.bind(__webpack_require__, 94239))
);
function CreateWallet() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CreateMaskWalletFrame, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: "/",
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Welcome, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: "/form",
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateWalletForm, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: "/mnemonic",
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateMnemonic, {
                    })
                })
            ]
        })
    }));
};


/***/ })

}]);