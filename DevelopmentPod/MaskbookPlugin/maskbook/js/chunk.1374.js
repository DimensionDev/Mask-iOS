"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1374],{

/***/ 71374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeUI": () => (/* binding */ WelcomeUI),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63552);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93145);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86716);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84879);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32824);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61382);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73774);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95440);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_4__);









const Content = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('div')`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ButtonGroup = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('div')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 33px 120px;
    gap: 10px;
    margin-top: 24px;
    width: 100%;
    max-width: 864px;
`;
const IFrame = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('iframe')`
    border: none;
    width: 100%;
    min-height: 498px;
    max-width: 864px;
`;
const StyledButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(()=>`
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 8px 16px;
    border-radius: 20px;
`
);
const CancelButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(({ theme  })=>`
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 8px 16px;
    border-radius: 20px;
    background: ${theme.palette.mode === 'dark' ? '#1A1D20' : '#F7F9FA'}
`
);
const MASK_PRIVACY_POLICY = 'https://legal.mask.io/maskbook/privacy-policy-browser.html';
const Welcome = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const mode = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)().palette.mode;
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useNavigate */ .s0)();
    const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useSearchParams */ .lr)();
    const privacyPolicyURL = new URL(/* asset import */ __webpack_require__(68945), __webpack_require__.b).toString();
    const privacyPolicyDocument = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return ()=>{
            var ref, ref1;
            return iframeRef === null || iframeRef === void 0 ? void 0 : (ref = iframeRef.current) === null || ref === void 0 ? void 0 : (ref1 = ref.contentWindow) === null || ref1 === void 0 ? void 0 : ref1.document;
        };
    }, [
        iframeRef
    ]);
    const updateIFrameStyle = ()=>{
        var ref;
        const iframeDocument = privacyPolicyDocument();
        if (!iframeDocument) return;
        const style = iframeDocument.createElement('style');
        style.textContent = `
              h3, h6 { color: ${mode === 'dark' ? '#D4D4D4' : '#111432'}; }
              p { color: ${mode === 'dark' ? '#D4D4D4;' : '#7b8192'}; }
              body::-webkit-scrollbar {
                width: 7px;
              }
              body::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
              }
              body::-webkit-scrollbar-thumb {
                border-radius: 4px;

              }
            `;
        (ref = iframeDocument.head) === null || ref === void 0 ? void 0 : ref.appendChild(style);
    };
    const handleIFrameLoad = ()=>{
        updateIFrameStyle();
        const iframeDocument = privacyPolicyDocument();
        if (!iframeDocument) return;
        const link = iframeDocument.getElementById('link');
        link === null || link === void 0 ? void 0 : link.addEventListener('click', handleLinkClick);
    };
    const handleLinkClick = ()=>{
        window.open(MASK_PRIVACY_POLICY);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            var ref;
            const link = (ref = privacyPolicyDocument()) === null || ref === void 0 ? void 0 : ref.getElementById('link');
            link === null || link === void 0 ? void 0 : link.removeEventListener('click', handleLinkClick);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        updateIFrameStyle();
    }, [
        mode
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WelcomeUI, {
        iframeRef: iframeRef,
        privacyPolicyURL: privacyPolicyURL,
        iframeLoadHandler: handleIFrameLoad,
        agreeHandler: ()=>navigate(urlcat__WEBPACK_IMPORTED_MODULE_4___default()(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .DashboardRoutes.CreateMaskWalletForm */ .vq.CreateMaskWalletForm, {
                chainId: searchParams.get('chainId')
            }))
        ,
        cancelHandler: ()=>window.close()
    }));
});
const WelcomeUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ privacyPolicyURL , iframeLoadHandler , agreeHandler , cancelHandler , iframeRef  })=>{
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_3__/* .useDashboardI18N */ .x)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__/* .MaskNotSquareIcon */ .h, {
                style: {
                    width: 208,
                    height: 60
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IFrame, {
                ref: iframeRef,
                src: privacyPolicyURL,
                onLoad: iframeLoadHandler
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CancelButton, {
                        color: "secondary",
                        onClick: cancelHandler,
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton, {
                        color: "primary",
                        onClick: agreeHandler,
                        children: t.agree()
                    })
                ]
            })
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Welcome);


/***/ }),

/***/ 68945:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6b5cfc4103eaebd03d56.html";

/***/ })

}]);