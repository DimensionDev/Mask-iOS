"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1939],{

/***/ 21939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeUI": () => (/* binding */ WelcomeUI),
/* harmony export */   "default": () => (/* binding */ Welcome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(927);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37731);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10459);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
/* harmony import */ var _components_RegisterFrame_ColumnLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46164);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32831);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86248);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13020);
/* harmony import */ var _components_FooterLine_links_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92275);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53242);










const Content = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)('div')(({ theme  })=>({
        padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
        [theme.breakpoints.down('md')]: {
            padding: `${theme.spacing(1)} ${theme.spacing(0)}`
        }
    })
);
const ButtonGroup = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    width: 180px;
`
);
const IFrame = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)('iframe')(({ theme  })=>({
        border: 'none',
        width: '100%',
        minHeight: '500px'
    })
);
function Welcome() {
    const iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const mode = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)().palette.mode;
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useNavigate */ .s0)();
    const agreementContentPageURL = new URL(/* asset import */ __webpack_require__(87407), __webpack_require__.b).toString();
    const privacyPolicyDocument = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>()=>iframeRef?.current?.contentWindow?.document
    , [
        iframeRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>()=>{
            const link = privacyPolicyDocument()?.getElementById('link');
            link?.removeEventListener('click', handleLinkClick);
        }
    , []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        updateIFrameStyle();
    }, [
        mode
    ]);
    const updateIFrameStyle = ()=>{
        const iframeDocument = privacyPolicyDocument();
        if (!iframeDocument) return;
        const style = iframeDocument.createElement('style');
        style.textContent = `
              h3, h6 { color: ${mode === 'dark' ? '#FFFFFF' : '#111432'}; }
              p { color: ${mode === 'dark' ? 'rgba(255, 255, 255, 0.8);' : '#7b8192'}; }
            `;
        iframeDocument.head?.appendChild(style);
    };
    const handleIFrameLoad = ()=>{
        updateIFrameStyle();
        const iframeDocument = privacyPolicyDocument();
        if (!iframeDocument) return;
        const link = iframeDocument.getElementById('link');
        link?.addEventListener('click', handleLinkClick);
    };
    const handleLinkClick = ()=>(0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__/* .openWindow */ .xw)(_components_FooterLine_links_json__WEBPACK_IMPORTED_MODULE_5__/* .MASK_PRIVACY_POLICY */ .Sp)
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WelcomeUI, {
        iframeRef: iframeRef,
        privacyPolicyURL: agreementContentPageURL,
        iframeLoadHandler: handleIFrameLoad,
        agreeHandler: ()=>navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .DashboardRoutes.Setup */ .vq.Setup)
        ,
        cancelHandler: ()=>window.close()
    });
};
const WelcomeUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ privacyPolicyURL , iframeLoadHandler , agreeHandler , cancelHandler , iframeRef  })=>{
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_4__/* .useDashboardI18N */ .x)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RegisterFrame_ColumnLayout__WEBPACK_IMPORTED_MODULE_2__/* .ColumnLayout */ .X, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IFrame, {
                    ref: iframeRef,
                    src: privacyPolicyURL,
                    onLoad: iframeLoadHandler
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonGroup, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            color: "secondary",
                            onClick: cancelHandler,
                            children: t.cancel()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            color: "primary",
                            onClick: agreeHandler,
                            children: t.agree()
                        })
                    ]
                })
            ]
        })
    });
});


/***/ }),

/***/ 87407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dbc146f281cd9cb438d3.html";

/***/ })

}]);