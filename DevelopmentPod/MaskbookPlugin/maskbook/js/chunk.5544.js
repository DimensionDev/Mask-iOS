"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5544],{

/***/ 80006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useMyPersonas)
/* harmony export */ });
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78778);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95175);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44451);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14257);




const personas = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .createSubscriptionFromAsyncSuspense */ .WS)(()=>_extension_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Identity.queryOwnedPersonaInformation */ .ZP.Identity.queryOwnedPersonaInformation(true)
, _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.ownPersonaChanged.on */ .q.events.ownPersonaChanged.on);
function useMyPersonas() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_3__.useSubscription)(personas);
}


/***/ }),

/***/ 43240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75068);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96724);



function useTitle(title) {
    const { setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__/* .PageTitleContext */ .I);
    (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
        setTitle(title);
    });
}


/***/ }),

/***/ 65544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85792);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93455);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18271);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44451);
/* harmony import */ var _components_DataSource_useMyPersonas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80006);
/* harmony import */ var _hooks_usePersonaContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78066);
/* harmony import */ var _Wallet_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16562);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32588);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78778);
/* harmony import */ var _hook_useTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43240);













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
            padding: '0 16px 20px 16px',
            wordBreak: 'break-all'
        }
    })
);
const PersonaSignRequest = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .useNavigate */ .s0)();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .useLocation */ .TH)();
    const { classes  } = useStyles();
    const [requestID, setRequestID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const personas = (0,_components_DataSource_useMyPersonas__WEBPACK_IMPORTED_MODULE_5__/* .useMyPersonas */ .n)();
    const { currentPersona  } = _hooks_usePersonaContext__WEBPACK_IMPORTED_MODULE_6__/* .PersonaContext.useContainer */ .m.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!personas.length) return;
        const url = new URLSearchParams(location.search);
        const messageInURL = url.get('message');
        const requestIDInURL = url.get('requestID');
        const identifierInURL = url.get('identifier');
        const selectedPersona = personas.find((x)=>x.identifier.toText() === identifierInURL
        ) ?? personas[0];
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
    const [, onSign] = (0,react_use__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(async ()=>{
        const url = new URLSearchParams(location.search);
        if (!requestID || !selected) return;
        const selectedPersona = selected.identifier;
        _utils__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages.events.personaSignRequest.sendToBackgroundPage */ .ql.events.personaSignRequest.sendToBackgroundPage({
            requestID,
            selectedPersona
        });
        const method = url.get('method');
        if (!method) {
            window.close();
            return;
        }
        // sign request from popup
        switch(method){
            case _Wallet_type__WEBPACK_IMPORTED_MODULE_7__/* .MethodAfterPersonaSign.DISCONNECT_NEXT_ID */ .ug.DISCONNECT_NEXT_ID:
                if (!message) break;
                const signatureResult = await _service__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Identity.generateSignResult */ .ZP.Identity.generateSignResult(selectedPersona, message);
                const profileIdentifier = url.get('profileIdentifier');
                const platform = url.get('platform');
                const identity = url.get('identity');
                const createdAt = url.get('createdAt');
                const uuid = url.get('uuid');
                if (!signatureResult || !profileIdentifier || !platform || !identity || !createdAt || !uuid || !currentPersona?.identifier.publicKeyAsHex) break;
                await _service__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Identity.detachProfileWithNextID */ .ZP.Identity.detachProfileWithNextID(uuid, currentPersona.identifier.publicKeyAsHex, platform, identity, createdAt, {
                    signature: signatureResult.signature.signature
                });
                const profile = currentPersona.linkedProfiles.find((x)=>x.identifier.toText() === profileIdentifier
                );
                if (!profile) break;
                await _service__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Identity.detachProfile */ .ZP.Identity.detachProfile(profile.identifier);
                break;
        }
        navigate(-1);
    }, [
        location,
        selected,
        requestID,
        message,
        currentPersona
    ]);
    const onCancel = async ()=>{
        if (!requestID) return;
        const url = new URLSearchParams(location.search);
        _utils__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages.events.personaSignRequest.sendToBackgroundPage */ .ql.events.personaSignRequest.sendToBackgroundPage({
            requestID
        });
        const method = url.get('method');
        if (!method) window.close();
        navigate(-1);
    };
    (0,_hook_useTitle__WEBPACK_IMPORTED_MODULE_9__/* .useTitle */ .Z)('');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classes.info,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            className: classes.title,
                            children: t('popups_persona_sign_request_title')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            className: classes.personaName,
                            children: selected?.nickname
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            className: classes.secondary,
                            style: {
                                wordBreak: 'break-all'
                            },
                            children: selected?.identifier.rawPublicKey
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    className: classes.secondary,
                    style: {
                        marginTop: 20
                    },
                    children: [
                        t('popups_persona_sign_request_message'),
                        ":"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    className: classes.message,
                    children: message
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classes.controller,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            className: classes.button,
                            style: {
                                backgroundColor: '#F7F9FA',
                                color: '#1C68F3'
                            },
                            onClick: onCancel,
                            children: t('cancel')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            className: classes.button,
                            onClick: onSign,
                            variant: "contained",
                            children: t('sign')
                        })
                    ]
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonaSignRequest);


/***/ }),

/***/ 16562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VM": () => (/* binding */ TransferAddressError),
/* harmony export */   "uM": () => (/* binding */ ReplaceType),
/* harmony export */   "ug": () => (/* binding */ MethodAfterPersonaSign)
/* harmony export */ });
var ReplaceType;
(function(ReplaceType) {
    ReplaceType["CANCEL"] = "CANCEL";
    ReplaceType["SPEED_UP"] = "SPEED_UP";
})(ReplaceType || (ReplaceType = {}));
var TransferAddressError;
(function(TransferAddressError) {
    TransferAddressError["SAME_ACCOUNT"] = "SAME_ACCOUNT";
    TransferAddressError["CONTRACT_ADDRESS"] = "CONTRACT_ADDRESS";
    TransferAddressError["RESOLVE_FAILED"] = "RESOLVE_FAILED";
    TransferAddressError["NETWORK_NOT_SUPPORT"] = "NETWORK_NOT_SUPPORT";
})(TransferAddressError || (TransferAddressError = {}));
var MethodAfterPersonaSign;
(function(MethodAfterPersonaSign) {
    MethodAfterPersonaSign["DISCONNECT_NEXT_ID"] = "DISCONNECT_NEXT_ID";
})(MethodAfterPersonaSign || (MethodAfterPersonaSign = {}));


/***/ })

}]);