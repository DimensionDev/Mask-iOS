"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5276],{

/***/ 65276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Welcome),
/* harmony export */   "WelcomeUI": () => (/* binding */ WelcomeUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.1192.js
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27768);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31757);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53082);
/* harmony import */ var _components_RegisterFrame_ColumnLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54281);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88448);
=======
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91377);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18875);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51987);
/* harmony import */ var _components_RegisterFrame_ColumnLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28416);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46754);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5276.js
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34539);
/* harmony import */ var _Personas_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20620);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76591);









const Content = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP)('div')(({ theme  })=>`
    padding: ${theme.spacing(1)} ${theme.spacing(8)};
`
);
const ButtonGroup = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP)('div')(({ theme  })=>`
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    width: 180px;
`
);
const IFrame = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP)('iframe')(({ theme  })=>`
    border: none;
    width: 100%;
    min-height: 520px;
`
);
function Welcome() {
    const iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const mode = (0,_Personas_api__WEBPACK_IMPORTED_MODULE_4__/* .useAppearance */ .MU)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_7__/* .useNavigate */ .s0)();
    const privacyPolicyURL = new URL(/* asset import */ __webpack_require__(87407), __webpack_require__.b).toString();
    const privacyPolicyDocument = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return ()=>{
            var ref, ref1;
            return iframeRef === null || iframeRef === void 0 ? void 0 : (ref = iframeRef.current) === null || ref === void 0 ? void 0 : (ref1 = ref.contentWindow) === null || ref1 === void 0 ? void 0 : ref1.document;
        };
    }, [
        iframeRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        return ()=>{
            var ref5;
            const link = (ref5 = privacyPolicyDocument()) === null || ref5 === void 0 ? void 0 : ref5.getElementById('link');
            link === null || link === void 0 ? void 0 : link.removeEventListener('click', handleLinkClick);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        updateIFrameStyle();
    }, [
        mode
    ]);
    const updateIFrameStyle = ()=>{
        var ref6;
        const document = privacyPolicyDocument();
        if (!document) return;
        const style = document.createElement('style');
        style.innerHTML = `
              h3, h6 { color: ${mode === 'dark' ? '#FFFFFF' : '#111432'}; }
              p { color: ${mode === 'dark' ? 'rgba(255, 255, 255, 0.8);' : '#7b8192'}; }
            `;
        (ref6 = document.head) === null || ref6 === void 0 ? void 0 : ref6.appendChild(style);
    };
    const handleIFrameLoad = ()=>{
        updateIFrameStyle();
        const link = document.getElementById('link');
        link === null || link === void 0 ? void 0 : link.addEventListener('click', handleLinkClick);
    };
    const handleLinkClick = ()=>{
        window.open(`next.html#${_type__WEBPACK_IMPORTED_MODULE_1__/* .RoutePaths.PrivacyPolicy */ .s2.PrivacyPolicy}`);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WelcomeUI, {
        iframeRef: iframeRef,
        privacyPolicyURL: privacyPolicyURL,
        iframeLoadHandler: handleIFrameLoad,
        agreeHandler: ()=>navigate(_type__WEBPACK_IMPORTED_MODULE_1__/* .RoutePaths.Setup */ .s2.Setup)
        ,
        cancelHandler: ()=>window.close()
    }));
};
const WelcomeUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ privacyPolicyURL , iframeLoadHandler , agreeHandler , cancelHandler , iframeRef  })=>{
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_5__/* .useDashboardI18N */ .xF)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RegisterFrame_ColumnLayout__WEBPACK_IMPORTED_MODULE_2__/* .ColumnLayout */ .X, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IFrame, {
                    ref: iframeRef,
                    src: privacyPolicyURL,
                    onLoad: iframeLoadHandler
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonGroup, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                            color: "secondary",
                            onClick: cancelHandler,
                            children: t.cancel()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                            color: "primary",
                            onClick: agreeHandler,
                            children: t.agree()
                        })
                    ]
                })
            ]
        })
    }));
});


/***/ }),

/***/ 87407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35f213ae74209f1d5ab7.html";

/***/ })

}]);