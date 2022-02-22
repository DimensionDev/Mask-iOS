"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8491],{

/***/ 38491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../plugins/DAO/src/base.ts + 7 modules
var base = __webpack_require__(37492);
// EXTERNAL MODULE: ../plugins/DAO/src/constants.ts
var constants = __webpack_require__(79091);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/iframe-resizer-react@1.1.0_757a802188413a36d4f24237d13b8e90/node_modules/iframe-resizer-react/dist/index.es.js
var index_es = __webpack_require__(58440);
// EXTERNAL MODULE: ../icons/utils/MaskIconPaletteContext.ts
var MaskIconPaletteContext = __webpack_require__(96941);
;// CONCATENATED MODULE: ../plugins/DAO/src/components/DAOPage.tsx




function DAOPage({ identifier  }) {
    const mode = (0,react.useContext)(MaskIconPaletteContext/* MaskIconPaletteContext */.v);
    const [size, setSize] = (0,react.useState)({
        height: 500,
        width: 1
    });
    const onResized = (data)=>setSize(data)
    ;
    if (!identifier) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* default */.Z, {
        log: true,
        checkOrigin: false,
        heightCalculationMethod: "lowestElement",
        enablePublicMethods: true,
        src: `https://dimensiondev.github.io/DAO-Interface/?mode=${mode}&userId=${identifier.userId.toLowerCase()}`,
        frameBorder: 0,
        onResized: onResized,
        style: {
            width: size.width,
            minHeight: 1,
            height: size.height,
            minWidth: '100%'
        }
    }));
}

;// CONCATENATED MODULE: ../plugins/DAO/src/SNSAdaptor/index.tsx




const sns = {
    ...base/* base */.u,
    init (signal) {},
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_dao`,
            label: 'DAO',
            priority: 1,
            UI: {
                TabContent: ({ identity  })=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DAOPage, {
                        identifier: identity === null || identity === void 0 ? void 0 : identity.identifier
                    }));
                }
            },
            Utils: {
                shouldDisplay: (identity)=>{
                    return !(identity === null || identity === void 0 ? void 0 : identity.identifier.isUnknown) && constants/* SUPPORTED_TWITTER_IDS.some */.aA.some((x)=>{
                        return x.toLowerCase() === (identity === null || identity === void 0 ? void 0 : identity.identifier.userId.toLowerCase());
                    });
                }
            }
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ })

}]);