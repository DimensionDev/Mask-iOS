"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[265],{

/***/ 80265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43021);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12463);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93573);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92186);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79226);
/* harmony import */ var _components_DataSource_useMyPersonas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9689);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()(()=>({
        container: {
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            flex: 1
        },
        info: {
            backgroundColor: '#F7F9FA',
            padding: 10,
            borderRadius: 8
        },
        title: {
            color: '#15181B',
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 500
        },
        personaName: {
            color: '#15181B',
            fontSize: 16,
            lineHeight: '22px',
            margin: '10px 0'
        },
        secondary: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '16px',
            marginBottom: 10
        },
        message: {
            color: '#15181B',
            fontSize: 12,
            lineHeight: '16px',
            flex: 1,
            wordBreak: 'break-all',
            maxHeight: 260,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        controller: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
            padding: 16,
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#ffffff'
        },
        button: {
            fontWeight: 600,
            padding: '9px 0',
            borderRadius: 20,
            fontSize: 14,
            lineHeight: '20px'
        },
        error: {
            color: '#FF5F5F',
            fontSize: 12,
            lineHeight: '16px',
            padding: '0px 16px 20px 16px',
            wordBreak: 'break-all'
        }
    })
);
const PersonaSignRequest = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .useNavigate */ .s0)();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .useLocation */ .TH)();
    const { classes  } = useStyles();
    const [requestID, setRequestID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const personas = (0,_components_DataSource_useMyPersonas__WEBPACK_IMPORTED_MODULE_5__/* .useMyPersonas */ .n)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!personas.length) return;
        const url = new URLSearchParams(location.search);
        const messageInURL = url.get('message');
        const requestIDInURL = url.get('requestID');
        const identifierInURL = url.get('identifier');
        var ref;
        const selectedPersona = (ref = personas.find((x)=>x.identifier.toText() === identifierInURL
        )) !== null && ref !== void 0 ? ref : personas[0];
        if (!messageInURL || !requestIDInURL || !selectedPersona) {
            navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.Wallet */ .mZ.Wallet, {
                replace: true
            });
        } else {
            setSelected(selectedPersona);
            setMessage(messageInURL);
            setRequestID(requestIDInURL);
        }
    }, [
        personas,
        location.search
    ]);
    const onSign = ()=>{
        if (!requestID || !selected) return;
        _utils__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages.events.personaSignRequest.sendToBackgroundPage */ .ql.events.personaSignRequest.sendToBackgroundPage({
            requestID,
            selectedPersona: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .Identifier.fromString */ .xb.fromString(selected.identifier.toText(), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ECKeyIdentifier */ .ob).unwrap()
        });
        window.close();
    };
    const onCancel = ()=>{
        if (!requestID) return;
        _utils__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages.events.personaSignRequest.sendToBackgroundPage */ .ql.events.personaSignRequest.sendToBackgroundPage({
            requestID
        });
        window.close();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.info,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classes.title,
                        children: t('popups_persona_sign_request_title')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classes.personaName,
                        children: selected === null || selected === void 0 ? void 0 : selected.nickname
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classes.secondary,
                        style: {
                            wordBreak: 'break-all'
                        },
                        children: selected === null || selected === void 0 ? void 0 : selected.fingerprint
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: classes.secondary,
                style: {
                    marginTop: 20
                },
                children: [
                    t('popups_persona_sign_request_message'),
                    ":"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: classes.message,
                children: message
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classes.button,
                        onClick: onCancel,
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        className: classes.button,
                        onClick: onSign,
                        variant: "contained",
                        children: t('sign')
                    })
                ]
            })
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonaSignRequest);


/***/ })

}]);