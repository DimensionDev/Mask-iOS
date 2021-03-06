"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3134],{

/***/ 75677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ LoadingPlaceholder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16787);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74491);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93573);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43021);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme)=>({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1,
            gap: 12
        }
    })
);
const LoadingPlaceholder = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .LoadingIcon */ .H, {
                style: {
                    color: '#1C68F3'
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                variant: "caption",
                color: "#A6A9B6",
                children: t('loading')
            })
        ]
    }));
});


/***/ }),

/***/ 66707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PersonaContext)
/* harmony export */ });
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44737);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98193);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21202);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28577);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45925);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29730);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63423);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93573);









function usePersonaContext() {
    const [deletingPersona, setDeletingPersona] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const currentIdentifier = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPersonaIdentifier */ .cn);
    const { value: personas , retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(async ()=>_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.queryOwnedPersonaInformation */ .ZP.Identity.queryOwnedPersonaInformation()
    );
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        return _utils__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages.events.ownPersonaChanged.on */ .ql.events.ownPersonaChanged.on(retry);
    }, [
        retry
    ]);
    const currentPersona = personas === null || personas === void 0 ? void 0 : personas.find((x)=>{
        var ref;
        return x.identifier.equals(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(currentIdentifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier */ .ob).unwrapOr((ref = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(personas)) === null || ref === void 0 ? void 0 : ref.identifier));
    });
    const otherPersonas = personas === null || personas === void 0 ? void 0 : personas.filter((x)=>{
        return !x.identifier.equals(currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.identifier);
    });
    return {
        deletingPersona,
        setDeletingPersona,
        personas: otherPersonas,
        currentPersona
    };
}
const PersonaContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_8__/* .createContainer */ .f)(usePersonaContext);


/***/ }),

/***/ 13134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75677);
/* harmony import */ var _hooks_usePersonaContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66707);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79226);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92186);






const Home = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(405), __webpack_require__.e(9653)]).then(__webpack_require__.bind(__webpack_require__, 29653))
);
const Logout = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>__webpack_require__.e(/* import() */ 6710).then(__webpack_require__.bind(__webpack_require__, 16710))
);
const PersonaRename = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>__webpack_require__.e(/* import() */ 4883).then(__webpack_require__.bind(__webpack_require__, 4883))
);
const PersonaSignRequest = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>__webpack_require__.e(/* import() */ 265).then(__webpack_require__.bind(__webpack_require__, 80265))
);
const r = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .relativeRouteOf */ .zD)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.Personas */ .mZ.Personas);
const Persona = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_2__/* .LoadingPlaceholder */ .u, {}),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hooks_usePersonaContext__WEBPACK_IMPORTED_MODULE_3__/* .PersonaContext.Provider */ .m.Provider, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .Routes */ .Z5, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .Route */ .AW, {
                        path: r(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.Logout */ .mZ.Logout),
                        element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Logout, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .Route */ .AW, {
                        path: r(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.PersonaRename */ .mZ.PersonaRename),
                        element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PersonaRename, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .Route */ .AW, {
                        path: r(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.PersonaSignRequest */ .mZ.PersonaSignRequest),
                        element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PersonaSignRequest, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .Route */ .AW, {
                        path: "*",
                        element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Home, {})
                    })
                ]
            })
        })
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Persona);


/***/ })

}]);