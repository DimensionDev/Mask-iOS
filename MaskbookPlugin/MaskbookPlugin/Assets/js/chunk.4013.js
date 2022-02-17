"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2164],{

/***/ 73021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ThirdPartyPluginPermission)
/* harmony export */ });
var ThirdPartyPluginPermission;
(function(ThirdPartyPluginPermission1) {
    ThirdPartyPluginPermission1[ThirdPartyPluginPermission1[/**
     * This is the internal permission that used to indicate if we should inject
     * sdk into a content script.
     *
     * This permission will be automatically granted when user interact with the plugin in the SNS.
     *
     * This permission should be revoked once the popup has closed.
     */ "SDKEnabled"] = 0] = "SDKEnabled";
    ThirdPartyPluginPermission1[ThirdPartyPluginPermission1["DEBUG_Profiles"] = 1] = "DEBUG_Profiles";
})(ThirdPartyPluginPermission || (ThirdPartyPluginPermission = {
}));


/***/ }),

/***/ 52164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ popups_ThirdPartyRequestPermission)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(27019);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/extension/background-script/ThirdPartyPlugin/types.ts
var types = __webpack_require__(73021);
;// CONCATENATED MODULE: ./src/extension/popups/ThirdPartyRequestPermission/ThirdPartyRequestPermission.tsx


function ThirdPartyRequestPermission(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        children: [
            "The plugin \"",
            props.pluginName,
            "\" (hosted on ",
            props.pluginURL,
            ") is going to request the following permissions:",
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                children: props.permissions.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: types/* ThirdPartyPluginPermission */.V[x]
                    }, x)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: ()=>window.close()
                ,
                children: "Cancel"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: ()=>props.onGrant(props.permissions)
                ,
                children: "Grant"
            })
        ]
    }));
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ThirdPartyRequestPermission, {
        pluginURL: plugin,
        pluginName: value.name,
        permissions: permission.map((x)=>Number.parseInt(x, 10)
        ),
        onGrant: (granted)=>{
            service/* default.ThirdPartyPlugin.grantPermission */.ZP.ThirdPartyPlugin.grantPermission(plugin, granted).then(()=>window.close()
            );
        }
    }));
};


/***/ })

}]);