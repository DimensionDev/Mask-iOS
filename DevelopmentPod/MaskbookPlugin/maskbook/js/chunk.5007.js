"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5007],{

/***/ 28047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ThirdPartyPluginPermission)
/* harmony export */ });
var ThirdPartyPluginPermission;
(function(ThirdPartyPluginPermission) {
    ThirdPartyPluginPermission[ThirdPartyPluginPermission["DEBUG_Profiles"] = 1] = "DEBUG_Profiles";
})(ThirdPartyPluginPermission || (ThirdPartyPluginPermission = {}));


/***/ }),

/***/ 65822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ popups_ThirdPartyRequestPermission)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ./src/extension/background-script/ThirdPartyPlugin/types.ts
var types = __webpack_require__(28047);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
;// CONCATENATED MODULE: ./src/extension/popups/ThirdPartyRequestPermission/ThirdPartyRequestPermission.tsx




function ThirdPartyRequestPermission(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "popups_following_permissions",
                values: {
                    pluginName: props.pluginName,
                    pluginURL: props.pluginURL
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                children: props.permissions.map((permission, key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: types/* ThirdPartyPluginPermission */.V[permission]
                    }, key)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: ()=>window.close()
                ,
                children: t('cancel')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: ()=>props.onGrant(props.permissions)
                ,
                children: t('popups_grant')
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/extension/popups/ThirdPartyRequestPermission/index.tsx





/* harmony default export */ function popups_ThirdPartyRequestPermission() {
    const param = (0,react_router/* useLocation */.TH)();
    const _ = new URLSearchParams(param.search);
    const permission = _.getAll('permission');
    const plugin = _.get('plugin');
    const { value  } = (0,useAsync/* default */.Z)(()=>service/* default.ThirdPartyPlugin.fetchManifest */.ZP.ThirdPartyPlugin.fetchManifest(plugin)
    , [
        plugin
    ]);
    if (!plugin) return null;
    if (!value) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThirdPartyRequestPermission, {
        pluginURL: plugin,
        pluginName: value.name,
        permissions: permission.map((x)=>Number.parseInt(x, 10)
        ),
        onGrant: (granted)=>{
            service/* default.ThirdPartyPlugin.grantPermission */.ZP.ThirdPartyPlugin.grantPermission(plugin, granted).then(()=>window.close()
            );
        }
    });
};


/***/ })

}]);